import React from "react";

function SmPillButton({ text, icon }) {
  return (
    <div>
      <button className="h-8 px-4 m-2 text-sm lg:text-base transition-colors duration-150 bg-gray-200 rounded-full focus:shadow-outline hover:bg-orange-400 hover:text-white focus:shadow-outline">
        {text}
      </button>
    </div>
  );
}

export default SmPillButton;
