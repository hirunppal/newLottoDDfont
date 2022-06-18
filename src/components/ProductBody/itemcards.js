import React from "react";
import { useAuth } from "../../context/auth";
import { useProduct } from "../../context/productsContext";
import ModalAuth from "../authUser/ModalAuth";

function Itemcards({ el }) {
  const { SetcartItems } = useProduct();
  const { user } = useAuth();
  // console.log(lottoNum);
  return (
    <div className="flex-auto w-3/12 min-w-3/12 rounded overflow-hidden text-font-Kanit m-4 bg-white bg-opacity-60 shadow-lg">
      <div className="px-14 py-4">
        <div className="flex flex-none -mt-2 -ml-7 ">
          <div className="font-bold text-sm mb-2">เลขเดี่ยว</div>
        </div>
        <div>
          <p className="text-gray-700 text-5xl font-bold cursor-pointer">
            {el.lottoNum}
          </p>
        </div>
      </div>
      <div className="px-5 pt-4 pb-0 ">
        <span
          className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-normal hover:font-semibold text-gray-800 mr-2 mb-2
        cursor-pointer"
        >
          ค้นหาเลขชุด
        </span>
        {user ? (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal hover:font-semibold text-gray-800 mr-2 mb-2
        cursor-pointer"
            onClick={(e) => {
              SetcartItems((prev) => [...prev, el]);
            }}
          >
            ใส่ตระกร้า
          </span>
        ) : (
          <ModalAuth
            avatar={
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal hover:font-semibold text-gray-800 mr-2 mb-2
        cursor-pointer"
              >
                ใส่ตระกร้า
              </span>
            }
          />
        )}
      </div>
    </div>
  );
}

export default Itemcards;
