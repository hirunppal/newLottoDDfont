import React from "react";

function Itemcards() {
  return (
    <div class=" min-w-fit max-w-sm rounded overflow-hidden text-font-Kanit m-4 bg-white bg-opacity-60 shadow-lg">
      <div class="px-14 py-4">
        <div className="flex flex-none -mt-2 -ml-7 ">
          <div class="font-bold text-sm mb-2">เลขเดี่ยว</div>
        </div>
        <div>
          <p class="text-gray-700 text-5xl font-bold cursor-pointer">115056</p>
        </div>
      </div>
      <div class="px-5 pt-4 pb-0 ">
        <span
          class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-normal hover:font-semibold text-gray-800 mr-2 mb-2
        cursor-pointer"
        >
          ค้นหาเลขชุด
        </span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal hover:font-semibold text-gray-800 mr-2 mb-2
        cursor-pointer"
        >
          ใส่ตระกร้า
        </span>
      </div>
    </div>
  );
}

export default Itemcards;
