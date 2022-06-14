import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";
function NavDrop({ user }) {
  const { SignOut } = useAuth();
  const [navdropshow, setNavdropshow] = useState(false);
  const navigate = useNavigate();

  const handlesignout = () => {
    SignOut();
  };
  return (
    <div
      onMouseOver={() => {
        setNavdropshow(true);
      }}
      onMouseLeave={() => {
        setNavdropshow(false);
      }}
    >
      <div>
        <a className="block text-lg z-50 text-white hover:text-gray-900">
          ข้อมูลของฉัน
        </a>
      </div>
      {/* <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown header{" "}
        <svg
          class="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button> */}

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownInformation"
        style={{ backgroundColor: "#F0BE8E" }}
        className={`z-50 ${
          navdropshow ? "" : "hidden"
        } divide-y divide-gray-100 rounded shadow w-44 `}
        onMouseOver={() => {
          setNavdropshow(true);
        }}
      >
        <div className="px-4 py-2 text-base text-gray-900 dark:text-white">
          <div className=" cursor-pointer">
            {user.firstName} <span className="text-sm">แก้ไข</span>
          </div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              ตู้เก็บล็อตโต้
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li> */}
        </ul>
        <div className="py-1">
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={(e) => {
              handlesignout();
            }}
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavDrop;
