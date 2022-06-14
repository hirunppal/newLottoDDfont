import React from "react";
import { useNavigate } from "react-router-dom";
import Menusmodside from "./Menus";
import { AiOutlineDisconnect } from "react-icons/ai";

function AdSidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <aside
        className="w-64 h-screen text-font-Kanit text-white"
        aria-label="Sidebar"
      >
        <div className="overflow-y-auto py-4 px-3 h-full bg-gray-800 rounded ">
          <div className=" flex-none block text-2xl w-full">
            <a onClick={() => navigate("/")}>ล็อตโต้.DD</a>
            <span className="flex w-1/3 h-7  justify-center items-center px-2 m-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              Admin
            </span>
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <Menusmodside
              linkto={"/admin/products"}
              titte={"Products"}
              iconComp={""}
            />
            <Menusmodside
              linkto={"/admin/products"}
              titte={"Sellers"}
              iconComp={""}
            />
            <Menusmodside
              linkto={"/admin/products"}
              titte={"Addproducts"}
              iconComp={""}
            />
            <Menusmodside
              linkto={"/admin/products"}
              titte={"Disconnect"}
              iconComp={<AiOutlineDisconnect size={22} />}
            />
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default AdSidebar;
