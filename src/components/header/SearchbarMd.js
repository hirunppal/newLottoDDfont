import React from "react";
import SmPillButton from "./unity/SmPillButton";
import { TbMinusVertical } from "react-icons/tb";
import DropdownOpt from "./unity/DropdownOpt";
import LottoNumbs from "./unity/LotNumbs";

function SearchbarMd() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-40 hero-content  w-screen bg-white text-font-Kanit m-6">
          <h1 className=" text-xl  text-gray">งวดวันที่ 1 มิถุนายน 2565</h1>

          <TbMinusVertical size={30} />
          <LottoNumbs />
          <div className="flex flex-col">
            <SmPillButton text="ค้นหาเลข" />
            <SmPillButton text="ค้นหาเลข" />
          </div>

          <TbMinusVertical size={30} />
          <div className="flex flex-col">
            <SmPillButton text="ค้นหาเลข" />
            <SmPillButton text="ค้นหาเลข" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchbarMd;
