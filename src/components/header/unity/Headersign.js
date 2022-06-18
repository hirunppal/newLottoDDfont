import React from "react";

function Headersign({ title }) {
  return (
    <>
      <div className=" flex  p-8 text-white mx-auto ">
        <h1 className="text-font-Kanit text-2xl text-center">{`${title}`}</h1>
      </div>
    </>
  );
}

export default Headersign;
