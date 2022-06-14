import React, { useState } from "react";
import SmPillButton from "./unity/SmPillButton";
import { TbMinusVertical } from "react-icons/tb";
import DropdownOpt from "./unity/DropdownOpt";
import LottoNumbs from "./unity/LotNumbs";

function SearchBarsm({ handleSearchhit, setNarr, Narr }) {
  // const [Narr, setNarr] = useState(["_", "_", "_", "_", "_", "_"]);
  // const farr = [1];
  // console.log(farr.join(""));
  return (
    <>
      <div className="flex justify-center">
        <div className="h-12 hero-content w-screen bg-white text-font-Kanit m-6">
          <h1 className=" text-lg text-gray">งวดวันที่: 1 มิถุนายน 2565</h1>
          <TbMinusVertical size={30} />
          <div className=" w-52 h-23 ">
            <input
              className="shadow-lg rounded border-stone-200 border bg-transparent text-lg focus:outline-none focus:bg-white focus:border-gray-200"
              type="text"
              placeholder="  ค้นหาเลข "
              // value={Narr}
              value={Narr?.join("")}
              onKeyDown={(e) => {
                const hitkey = e.nativeEvent.key;
                if (
                  Narr.length < 6 &&
                  !isNaN(Number(hitkey)) &&
                  9 < Number(hitkey) <= 0
                ) {
                  // setNarr((prev) => prev + hitkey);
                  setNarr((prev) => [...prev, hitkey]);
                }
                if (hitkey === "Backspace") {
                  // setNarr((prev) => prev.slice(prev.length, 1));
                  setNarr((prev) => [...prev?.slice(0, prev.length - 1)]);
                }
              }}
              // onChange={(e) => {
              //   if (Narr.length < 6) setNarr(e.target.value);
              // }}
              // value={Narr.join(" ")}
              // onChange={(e) => {
              //   console.log(e);
              //   if (Narr.length < 6)
              //     setNarr((prev) => [...prev, e.nativeEvent.data]);
              //   // if (e.target.value.length <= 6) setNarr(e.target.value);
              // }}
            ></input>
          </div>
          <div
            onClick={(e) => {
              handleSearchhit();
            }}
          >
            <SmPillButton text="ค้นหาเลข" />
          </div>
          <TbMinusVertical size={30} />
          <DropdownOpt />
        </div>
      </div>
    </>
  );
}

export default SearchBarsm;
