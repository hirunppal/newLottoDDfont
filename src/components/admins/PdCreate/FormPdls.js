import React, { useEffect, useState } from "react";
import PdForm from "./pdForm";
import { BiPlusCircle } from "react-icons/bi";
import { useAdmin } from "../../../context/AdminContext";
import { filterlot } from "../AdminService/FilterLotto";

function FormPdls({ seller, Setseller, SetsellerId }) {
  const [fromlength, setfromlength] = useState(5);
  const [forms, setForms] = useState([]);
  const { ModaddProducts } = useAdmin();

  const blankform = (inp) => {
    for (let i = forms.length; i < inp; i++) {
      setForms((prev) => {
        return [
          ...prev,
          {
            no: prev.length + 1 || 1,
            lottoNum: "",
            lottoSet: "",
            registerStat: "REGISTERING",
            prizeDate: "",
          },
        ];
      });
    }
  };

  useEffect(() => {
    // setfromlength / 5;
    blankform(fromlength);
  }, [fromlength]);

  const handlesetFromlimit = () => {};

  return (
    <>
      <form
        className="  block w-full max-w-lg self-start md:self-center "
        onSubmit={(event) => {
          event.preventDefault();
          // console.log(forms);
          const submitform = forms?.filter(filterlot);
          ModaddProducts(submitform, seller.id, seller.email);
        }}
      >
        <div className="flex flex-row uppercase  border-b border-teal-500 ">
          <div className=" cursor-default flex-1 bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 ">
            No.
          </div>
          <div className=" cursor-default flex-1 bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 ">
            lottoNum
          </div>
          <div className=" cursor-default flex-1 bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 ">
            lottoSet
          </div>
          <div className="cursor-default flex-1 bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 ">
            resgisterstat
          </div>
        </div>
        {forms.map((el, index, key) => {
          return (
            <PdForm
              index={index}
              el={el}
              key={index}
              handlesetFromlimit={handlesetFromlimit}
              forms={forms}
              setForms={setForms}
            />
          );
        })}

        <div className="flex">
          <button
            className=" text-white py-1 px-2 rounded flex self-end"
            type="button"
            onClick={() => {
              setfromlength(forms.length + 5);
              setForms([]);
            }}
          >
            <BiPlusCircle size={20} />
            <span>{"5"}</span>
          </button>
        </div>
        <div>
          <span className=" text-xl">PrizeDate:</span>
          <input
            className="flex-shrink-0 w-1/3 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 m-3 rounded"
            type="date"
            onChange={(e) => {
              // console.log(e.target.value);
              const newState = forms.map((obj) => {
                return { ...obj, prizeDate: e.target.value };
              });
              setForms(newState);
            }}
          ></input>
        </div>

        <button
          className="flex-shrink-0 w-1/3 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          CreateAll
        </button>
        <button
          className="flex-shrink-0 w-1/3 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
          onClick={() => {
            {
              Setseller(null);
              SetsellerId("");
            }
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
}

export default FormPdls;
