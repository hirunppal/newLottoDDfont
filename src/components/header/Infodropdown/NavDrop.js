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
      className="h-auto p-0 mx-5 hover:-translate-y-2 hover:scale-100  duration-300"
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

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownInformation"
        className={`z-50 bg-[#F0BE8E] ${
          navdropshow ? "" : "hidden "
        } divide-y divide-gray-100 rounded w-44 m-0`}
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
              className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={(e) => {
                navigate("/vault");
              }}
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
            className="block px-1 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
