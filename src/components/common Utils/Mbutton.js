import React from "react";
import { useNavigate } from "react-router-dom";

function Mbutton({ title, onClickfunc }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="hover:text-zinc hover:bg-transparent lg:text-lg   hover:border-white border bg-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2  ring-offset-orange-500/50	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm"
        onClick={onClickfunc}
      >
        {title}
      </button>
    </div>
  );
}

export default Mbutton;
