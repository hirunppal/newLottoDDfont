import React from "react";

function LottonumBox({ value, setvaluestate, handleKeyup, idx }) {
  return (
    <div className="" style={{ flexBasis: "0" }}>
      <input
        className={
          `shadow-lg flex py-4 w-16 m-1 mt-2 rounded border-stone-200 border bg-transparent text-3xl text-center focus:outline-none focus:bg-white focus:border-gray-200` +
          `idx:${idx}`
        }
        type="text"
        idx={idx}
        value={value}
        // idx={idx}
        onChange={(e) => {
          // console.log(e.nativeEvent.data);
          if (e.nativeEvent.data == null) {
            setvaluestate("");
          } else if (!isNaN(Number(e.nativeEvent.data))) {
            setvaluestate(e.nativeEvent.data);
          }
        }}
        onKeyUp={handleKeyup}
        onKeyDown={(e) => {
          // if (e.nativeEvent.key !== "Backspace") {
          //   console.log("LOLLitdel");
          // }
        }}
      ></input>
    </div>
  );
}

export default LottonumBox;
