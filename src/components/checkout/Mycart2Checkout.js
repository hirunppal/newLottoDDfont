import React, { useState } from "react";
import { useProduct } from "../../context/productsContext";
import Cartlists from "./Cartlists";
import Cartscard from "./Cartscard";
import Footcart from "./Footcart";

function Mycart() {
  const { cartItems, createQrtopay, createOrder } = useProduct();
  // console.log(cartItems);
  const [qrforOrder, setqrforOrder] = useState("");
  const OnsubmitOrder = async () => {
    // console.log(cartItems);
    const { resproduct } = await createOrder(cartItems);
    await createQrtopay(resproduct);

    // res = resproduct [orderdetial 1, orderdetail2]
  };
  return (
    <div className="flex bg-white rounded-top justify-center h-4/5 text-font-Kanit">
      <div className="flex flex-row justify-center w-2/3">
        <div>
          {cartItems.length < 1 ? (
            <>
              <div className="text-2xl mb-4 pt-3 text-center">
                <h2>คุณไม่มีรายการในตระกร้า</h2>
              </div>
            </>
          ) : (
            <></>
          )}
          <Cartlists />
          {/* /D */}
          <div
            className="bg-[#EDB178] hover:bg-[#EDB178]/90  focus:ring-[#F7BE38]/50 font-medium rounded-lg text-base px-5 mt-2 py-2  w-full inline-flex items-center justify-center"
            onClick={() => {
              OnsubmitOrder();
            }}
          >
            <button type="button" className="text-gray-900 mb-1">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
