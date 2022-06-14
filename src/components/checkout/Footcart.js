import React from "react";
import { useNavigate } from "react-router-dom";

function Foorcart({ sumPrice }) {
  const navigate = useNavigate();
  const handelClickCheckout = () => {};
  // console.log(sumPrice());
  return (
    <div>
      <div className="flex  bg-[#EAA462] rounded-b-lg w-auto p-4  h-auto justify-center  ">
        <div className="flex justify-between w-full ">
          <div className="flex justify-between w-full  ">
            <button
              className="btn btn-sm bg-light border "
              onClick={() => {
                navigate("/");
              }}
            >
              เลือกซื้อเพิ่ม
            </button>
            <div className="px-md-5 " id="footer-font">
              <b className="pl-md-4  text-gray-200">
                ราคารวมทั้งหมด{" "}
                <span className="pl-md-4">{`  ${sumPrice()} .-  `}</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foorcart;
