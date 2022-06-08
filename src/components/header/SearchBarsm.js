import React from "react";
import SmPillButton from "./unity/SmPillButton";
import { TbMinusVertical } from "react-icons/tb";
import DropdownOpt from "./unity/DropdownOpt";
import LottoNumbs from "./unity/LotNumbs";

function SearchBarsm() {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-12 hero-content w-screen bg-white text-font-Kanit m-6">
          <h1 className=" text-lg text-gray">งวดวันที่: 1 มิถุนายน 2565</h1>
          <TbMinusVertical size={30} />
          <div className=" w-52 h-23 ">
            <input
              className="shadow-lg rounded border-stone-200 border bg-transparent text-md focus:outline-none focus:bg-white focus:border-gray-200"
              type="text"
              placeholder="  ค้นหาเลข "
            ></input>
          </div>
          <SmPillButton text="ค้นหาเลข" />
          <TbMinusVertical size={30} />
          <DropdownOpt />
        </div>
      </div>
    </>
  );
}

export default SearchBarsm;
