import React, { useState } from "react";
import Modalsignin from "../authUser/Modalsignin";
import Modalauth from "../authUser/ModalAuth";
import Cartscard from "./Cartscard";

function Mycart() {
  return (
    <div>
      <div className="bg-white rounded-top mt-5 flex justify-center">
        <div className="flex flex-row justify-center">
          <div className=" pt-3">
            <div className="flex">
              <div className="pt-3 text-2xl">
                <h2>รายการในตระกร้า</h2>
              </div>
            </div>

            <div className="flex pt-4">
              <div>
                <h5 className="">shopping bag</h5>
              </div>
              <div className="font-normal">2 items</div>
            </div>
            <div className="flex flex-row px-lg-5 mx-lg-5">
              <div className="px-lg-5 mr-lg-5">PRODUCTS</div>
              <div className="px-lg-5 ml-lg-5">PRICE</div>
              <div className="px-lg-5 ml-lg-1">QUANTITY</div>
              <div className="px-lg-5 ml-lg-3">TOTAL</div>
            </div>
            <Cartscard />
            <Cartscard />
            <Cartscard />
            <div className="flex bg-amber-700 rounded-b-lg w-auto p-4 h-auto justify-center  ">
              <div className="flex justify-center w-full ">
                <div className="flex justify-between ">
                  <div>
                    <button className="btn btn-sm bg-light border ">
                      GO BACK
                    </button>
                  </div>
                  <div className="px-md-0 px-1" id="footer-font">
                    <b className="pl-md-4">
                      SUBTOTAL<span className="pl-md-4">$61.78</span>
                    </b>
                  </div>
                  <div></div>
                  <button
                    className="btn btn-sm bg-dark text-white px-lg-5 px-3"
                    // onClick={(e) => {
                    //   if (0) {
                    //     Modalsignin.handeClickmodal();
                    //   }
                    // }}
                    // onClick={() => setShowModal(true)}
                  >
                    CONTINUE
                  </button>
                  {/* <Modalauth
                    avatar={
                      <button
                        className="btn btn-sm bg-dark text-white px-lg-5 px-3"
                        // onClick={(e) => {
                        //   if (0) {
                        //     Modalsignin.handeClickmodal();
                        //   }
                        // }}
                        // onClick={() => setShowModal(true)}
                      >
                        CONTINUE
                      </button>
                    }
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
