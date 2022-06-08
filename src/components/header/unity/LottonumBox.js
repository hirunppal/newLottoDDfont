import React from "react";

function LottonumBox({ value, setvaluestate }) {
  return (
    <div className="" style={{ flexBasis: "0" }}>
      <input
        className="shadow-lg flex py-4 w-16 m-1 mt-2 rounded border-stone-200 border bg-transparent text-3xl text-center focus:outline-none focus:bg-white focus:border-gray-200"
        type="text"
        value={value}
        onChange={(e) => {
          if (!isNaN(Number(e.nativeEvent.data))) {
            setvaluestate(e.nativeEvent.data);
          }
        }}
      ></input>
    </div>
  );
}

export default LottonumBox;
