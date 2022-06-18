import React from "react";
import { useNavigate } from "react-router-dom";
function VoultNotfound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10 border-b-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center text-gray-600/60 font-bold leading-tight">
          ไม่พบคำสั่งซื้อ
        </h1>
      </div>
      <div className="flex justify-center items-center mb-10 sm:mb-20">
        <button
          className="hover:text-zinc hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm"
          onClick={(e) => {
            navigate("/");
          }}
        >
          ไปที่หน้าเลือกสินค้า
        </button>
        <button
          className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-zinc px-4 sm:px-8 py-1 sm:py-3 text-sm"
          onClick={(e) => {
            navigate("/cart");
          }}
        >
          ตระกร้าของฉัน
        </button>
      </div>
    </>
  );
}

export default VoultNotfound;
