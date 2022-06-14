import React from "react";
import { Link } from "react-router-dom";
function Menusmodside(props) {
  const { linkto, titte, iconComp } = props;
  return (
    <div>
      <li>
        <button
          //   to={buttonto}
          className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {iconComp ? (
            <div className="flex-shrink-0 w-2 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
              {iconComp}
            </div>
          ) : (
            <></>
          )}
          <span className="flex-1 ml-3 whitespace-nowrap text-center">
            {titte}
          </span>
        </button>
      </li>
    </div>
  );
}

export default Menusmodside;
