import React, { useState } from "react";

function PdForm({ el, index, forms, setForms }) {
  return (
    <div className="flex items-center border-b border-teal-500 py-2 w-fit">
      <h1 className=" cursor-default bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight ">
        {index + 1}
      </h1>
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="XXX XXX"
        value={forms[index].lottoNum + ""}
        onChange={(e) => {
          if (forms[index].lottoNum.length < 6) {
            const newState = forms.map((obj, idx) => {
              if (idx === index) {
                return { ...obj, lottoNum: e.target.value };
              }
              return obj;
            });
            setForms(newState);
          }
        }}
      />
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="set"
        value={forms[index].lottoSet + ""}
        onChange={(e) => {
          if (forms[index].lottoSet.length < 3) {
            const newState = forms.map((obj, idx) => {
              if (idx === index) {
                return { ...obj, lottoSet: e.target.value };
              }
              return obj;
            });
            setForms(newState);
          }
        }}
      />
      <select
        className="block appearance-none w-4/6 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => {
          const newState = forms.map((obj, idx) => {
            if (idx === index) {
              return { ...obj, registerStat: e.target.value };
            }
            return obj;
          });
          setForms(newState);
        }}
      >
        <option>REGISTERING</option>
        <option>APPROVED</option>
      </select>
    </div>
  );
}

export default PdForm;
