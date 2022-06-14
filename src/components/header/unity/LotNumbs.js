import LottonumBox from "./LottonumBox";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import SmPillButton from "./SmPillButton";
import { useProduct } from "../../../context/productsContext";

function LottoNumbs({ Narr, setNarr }) {
  const [N1, setn1] = useState(Narr[0] || "");
  const [N2, setn2] = useState(Narr[1] || "");
  const [N3, setn3] = useState(Narr[2] || "");
  const [N4, setn4] = useState(Narr[3] || "");
  const [N5, setn5] = useState(Narr[4] || "");
  const [N6, setn6] = useState(Narr[5] || "");
  const stateObj = { 1: N1, 2: N2, 3: N3, 4: N4, 5: N5, 6: N6 };
  const setstateObj = {
    1: setn1,
    2: setn2,
    3: setn3,
    4: setn4,
    5: setn5,
    6: setn6,
  };
  const { Setpdfilter } = useProduct();
  const handleClickSearch = () => {
    Setpdfilter((prev) => (prev = N1 + N2 + N3 + N4 + N5 + N6));
  };
  const handleClickClear = () => {
    Setpdfilter(null);
    for (let k in setstateObj) {
      console.log(setstateObj[k]);
      setstateObj[k]("");
      // k(null);
    }
  };
  // const setvaluestate = (value, idx) => {
  //   // const idx = 0;
  //   setNarr((prev) => [...prev]);
  //   console.log(value);
  //   console.log(idx);
  //   console.log(Narr);
  // };
  const handleKeyup = (e) => {
    const form = e.target.form;
    const index = Array.prototype.indexOf.call(form, e.target);
    form.elements[index + 1].focus();
    e.preventDefault();
  };

  return (
    <div>
      <h1>ค้นหาเลขสวย ถูกใจ !!</h1>

      <div className="w-800px flex flex-row justify-start ">
        {/* { (let i=0;i<=6;i++){}} */}
        {/* <LottonumBox value={Narr[0]} idx={0} setvaluestate={setvaluestate} />
        <LottonumBox value={Narr[1]} idx={1} setvaluestate={setvaluestate} />
        <LottonumBox value={Narr[2]} idx={2} setvaluestate={setvaluestate} />
        <LottonumBox value={Narr[3]} idx={3} setvaluestate={setvaluestate} />
        <LottonumBox value={Narr[4]} idx={4} setvaluestate={setvaluestate} />
        <LottonumBox value={Narr[5]} idx={5} setvaluestate={setvaluestate} /> */}
        {/* <LottonumBox
          handleKeyup={handleKeyup}
          value={N1}
          setvaluestate={setn1}
        />
        <LottonumBox
          handleKeyup={handleKeyup}
          value={N2}
          setvaluestate={setn2}
        />
        <LottonumBox
          handleKeyup={handleKeyup}
          value={N3}
          setvaluestate={setn3}
        />
        <LottonumBox
          handleKeyup={handleKeyup}
          value={N4}
          setvaluestate={setn4}
        />
        <LottonumBox
          handleKeyup={handleKeyup}
          value={N5}
          setvaluestate={setn5}
        />
        <LottonumBox
          handleKeyup={handleKeyup}
          value={N6}
          setvaluestate={setn6}
        /> */}
        {Narr.map((element, idx) => (
          <>
            <LottonumBox
              idx={idx}
              handleKeyup={handleKeyup}
              value={Object.values(stateObj)[idx]}
              setvaluestate={Object.values(setstateObj)[idx]}
            />
          </>
        ))}
        <div className="flex flex-col justify-items-center ">
          <div className="mt-3 ml-2 cursor-pointer" onClick={handleClickSearch}>
            <BsSearch size={35} />
          </div>
          <div className=" m-2 cursor-pointer" onClick={handleClickClear}>
            <span>ล้าง..</span>
          </div>
          {/* <SmPillButton text="" /> */}
        </div>
      </div>
    </div>
  );
}

export default LottoNumbs;
