import React from "react";
import { useProduct } from "../../context/productsContext";
import LottonumBox from "../header/unity/LottonumBox";

function Cartscard({ cartItem }) {
  console.log(cartItem);
  return (
    <div>
      <div className="flex flex-row justify-between align-center sm:p-1 sm:mb-2 lg:p-6 lg:mb-6 pt-5  pb-5rounded-lg shadow-lg bg-white max-w-3xl">
        <div className="flex flex-row align-items-center">
          <div className="flex flex-column pl-md-3 pl-1">
            <span className="pl-5">{cartItem.lottoNum}</span>
          </div>
        </div>
        <div className="pl-md-0 pl-2">
          <b>{cartItem.lottoSet}</b>
        </div>
        <div className="pl-md-0 ">
          <span className="fa fa-minus-square text-secondary"></span>
          <span className="px-md-3 px-1">1</span>
          <span className="fa fa-plus-square text-secondary"></span>
        </div>
        <div className="pl-md-0 pl-1">
          <b>{`${cartItem.basePrice}.-`}</b>
        </div>
      </div>
    </div>
  );
}

export default Cartscard;
