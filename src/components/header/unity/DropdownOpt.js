import React from "react";

function DropdownOpt() {
  return (
    <>
      <div className="inline-block relative w-22">
        <select className="h-8 px-4 m-2 text-sm transition-colors duration-150 bg-gray-200 rounded-full block appearance-none w-25 border border-gray-200 hover:bg-orange-400 py-2 pr-8 hover:text-white  shadow leading-tight focus:outline-none focus:shadow-outline">
          <option className="text-sm ">เลขเดี่ยว</option>
          <option className="text-sm ">รวมชุด</option>
          {/* <option>Option 3</option> */}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default DropdownOpt;
