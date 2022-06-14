import { useAuth } from "../../context/auth";
import { AiFillShopping } from "react-icons/ai";
import ModalAuth from "../authUser/ModalAuth";
import { useNavigate } from "react-router-dom";
import NavDrop from "./Infodropdown/NavDrop";
import { useState } from "react";
function Headdertop() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // console.log(user);
  return (
    <>
      <div className="visible h-5 flex justify-between text-font-Kanit text-white  mt-3 mx-5 z-10 ">
        <div className=" flex-none ml-6 block text-2xl">
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            ล็อตโต้.DD
          </a>
        </div>
        {/* <div className="  "></div> */}
        <div className=" flex-grow-2 min-w-600 w-3/6 flex flex-nowrap justify-between">
          <a
            className=" block text-lg text-white hover:text-gray-900"
            onClick={() => {
              navigate("/");
            }}
          >
            หน้าหลัก
          </a>
          <a
            className="block text-lg text-white hover:text-gray-900"
            onClick={(e) => {
              navigate("/checklotto");
            }}
          >
            ตรวจสอบรางวัล
          </a>
          {user ? (
            <>
              {/* //my info */}
              <NavDrop user={user} />
              {/* //my info */}
              <div
                className=" inline cursor-pointer hover:-translate-y-1 hover:scale-120  duration-300"
                onClick={(el) => {
                  if (user) {
                    navigate("/cart");
                  }
                }}
              >
                <AiFillShopping size={26} />
              </div>
            </>
          ) : (
            <>
              <ModalAuth
                avatar={
                  <a className=" block text-lg text-white hover:text-gray-900">
                    เข้าสู่ระบบ
                  </a>
                }
              />
              <ModalAuth
                avatar={
                  <a className=" block text-lg text-white hover:text-gray-900">
                    สมัครสมาชิก
                  </a>
                }
                onStart={1}
              />
              <ModalAuth
                avatar={<AiFillShopping size={26} />}
                tryto={"/cart"}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Headdertop;
