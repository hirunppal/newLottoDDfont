import React, { useState } from "react";
import { useAdmin } from "../../../context/AdminContext";
import FormPdls from "../PdCreate/FormPdls";

function PdCreate() {
  const [sellerId, SetsellerId] = useState("");
  const [seller, Setseller] = useState(null);
  const { ModgetSeller } = useAdmin(null);
  return (
    <div className="w-full flex flex-col justify-start md:justify-center p-5 ">
      <div className=" text-4xl m-5">CreateProduct</div>
      <form
        className="w-2/3 max-w-lg self-center"
        onSubmit={async (e) => {
          e.preventDefault();
          const { seller } = await ModgetSeller(sellerId);
          Setseller(seller[0]);

          // alert()// console.log(seller);
        }}
      >
        <div className="flex flex-col flex-wrap -mx-3 mb-6">
          <label
            className="block uppercase w-full tracking-wide text-gray-50 text-base font-bold mb-2"
            htmlFor="grid-first-name"
          >
            sellerId
          </label>
          <div className="flex flex-row">
            <input
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="sellerId"
              value={sellerId}
              onChange={(e) => {
                if (seller) {
                } else SetsellerId(e.target.value);
              }}
            />
            {seller ? (
              <button
                className=" bg-gray-500 border-red-500 hover:border-red-700 text-sm border-4 text-white m-1 mb-3 px-2 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  Setseller(null);
                  SetsellerId("");
                }}
              >
                Clear Seller
              </button>
            ) : (
              <button
                className={`${
                  seller ? "hidden" : ""
                } bg-blue-500 hover:bg-blue-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white m-1 mb-3 px-2 rounded`}
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
          {sellerId ? null : (
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
      </form>
      {seller ? (
        <FormPdls
          Setseller={Setseller}
          SetsellerId={SetsellerId}
          seller={seller}
        />
      ) : (
        <div className="flex w-48  text-2xl self-center justify-center border-b border-teal-500 ">
          <p>Please submit sellerID!</p>
        </div>
      )}
    </div>
  );
}

export default PdCreate;
