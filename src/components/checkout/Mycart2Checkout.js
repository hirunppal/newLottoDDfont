import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/productsContext";
import SmPillButton from "../header/unity/SmPillButton";
import Cartlists from "./Cartlists";
import Cartscard from "./Cartscard";
import Footcart from "./Footcart";
import ModalQrpayform from "./ModalQrpayform";

function Mycart() {
  const {
    cartItems,
    createQrtopay,
    createOrder,
    Qr,
    setQr,
    paymodal,
    setpaymodal,
    ordertopay,
    setordertopay,
  } = useProduct();
  const [payButtonid, setpayButtonid] = useState(null);
  const [priceSum, setpriceSum] = useState(null);

  useEffect(() => {
    const sumPriceEFF = (cartItems) => {
      if (cartItems) {
        const sum = cartItems.reduce((total, el) => {
          return total + +el.basePrice;
        }, 0);
        setpriceSum(sum);
        return sum;
      }
    };
    const sum = sumPriceEFF(cartItems);
  }, [cartItems]);
  const OnsubmitOrder = async () => {
    const res = await createOrder(cartItems);
    return res;
  };

  const F = async (id) => {
    const { Qrsvg, Ordertopay } = await createQrtopay(id);
    console.log(Qrsvg);
    console.log(Ordertopay);
    console.log("Ordertopay");
    if (Ordertopay) {
      await setQr(Qrsvg);
      await setordertopay(Ordertopay);
      await setpaymodal(true);
    }
  };
  return (
    <div className="flex bg-white rounded-top justify-center h-4/5 text-font-Kanit">
      <div className="flex flex-row justify-center w-2/3">
        <div>
          {cartItems?.length < 1 || cartItems === undefined ? (
            <>
              <div className="text-2xl mb-4 pt-3 text-center">
                <h2>คุณไม่มีรายการในตระกร้า</h2>
              </div>
            </>
          ) : (
            <>
              <Cartlists />
              <div
                className="bg-[#EDB178] hover:bg-[#EDB178]/90  focus:ring-[#F7BE38]/50 font-medium rounded-lg text-base px-5 mt-2 py-2  w-full inline-flex items-center justify-center"
                onClick={() => {
                  const res = OnsubmitOrder();
                  console.log(res.id);
                  setpayButtonid(res.id);
                }}
              >
                <button type="button" className="text-gray-900 mb-1">
                  Confirm Order
                </button>
              </div>
              {1 ? (
                <SmPillButton
                  text="ดำเนินการต่อ"
                  onClick={() => {
                    setQr(null);
                    F(payButtonid);
                  }}
                />
              ) : null}
              {paymodal ? (
                <ModalQrpayform
                  ordertopay={ordertopay}
                  Qr={Qr}
                  setpaymodal={setpaymodal}
                  priceSum={priceSum}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mycart;
