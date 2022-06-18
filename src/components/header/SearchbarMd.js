import React from "react";
import SmPillButton from "./unity/SmPillButton";
import { TbMinusVertical } from "react-icons/tb";
import DropdownOpt from "./unity/DropdownOpt";
import LottoNumbs from "./unity/LotNumbs";

function SearchbarMd({ Narr, setNarr }) {
  return (
    <div>
      <div className="flex justify-center  ">
        <div className="h-40 hero-content w-screen bg-white text-font-Kanit m-6 flex flex-col md:flex-row ">
          <h1 className=" text-xl  text-gray">งวดวันที่ 1 มิถุนายน 2565</h1>

          <TbMinusVertical size={30} />
          <form className="flex">
            <LottoNumbs Narr={Narr} setNarr={setNarr} />
          </form>
          <div className=" grid grid-cols-9 mt-4">
            <div className="flex flex-col col-span-4">
              <SmPillButton
                text="2 ตัวท้าย"
                onClick={() => {
                  console.log("2");
                }}
              />
              <SmPillButton text="3 ตัวท้าย" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <TbMinusVertical size={30} className={" justify-self-center"} />
            </div>

            <div className="flex flex-col col-span-4">
              <SmPillButton text="ค้นหาเลข" />
              <SmPillButton text="ค้นหาเลข" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchbarMd;
