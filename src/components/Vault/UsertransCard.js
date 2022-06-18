import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/productsContext";
import SmPillButton from "../header/unity/SmPillButton";
import ModalQrpayform from "../checkout/ModalQrpayform";
function UsertransCard({ el }) {
  //   console.log(el);
  //   const time = new Date();
  //   console.log(el.OrderDetails);
  //   const praser = new DOMParser();
  const [paymodal, setpaymodal] = useState(false);
  const [ordertopay, setordertopay] = useState(null);
  const [priceSum, setpriceSum] = useState(null);
  const { createQrtopay, orders, setOrders, Qr, setQr } = useProduct();

  useEffect(() => {
    const ArrPricce = el.OrderDetails.map((el) => el.Price);
    if (ArrPricce) {
      const priceSum = ArrPricce.reduce((prev, b) => +prev + +b, 0);
      setpriceSum(priceSum);
    }
  }, []);

  const F = async (id) => {
    const { Qrsvg, Ordertopay } = await createQrtopay(id);
    // const htmlQr = praser.parseFromString(`${res}`, "image/svg+xml");
    setQr(Qrsvg);
    setordertopay(Ordertopay);
    // console.log(Qr);
    setpaymodal(true);

    // return htmlQr;
  };

  return (
    <>
      <div className="flex justify-around w-1/2 hover:text-orange-600 hover:bg-transparent lg:text-lg   hover:border-gray border bg-gray-100 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-4 	focus:ring-blue rounded text-gray-700 px-4 sm:px-26 py-1 sm:py-6 m-3 md:m-6 text-sm">
        <div className=" cursor-default flex flex-col justify-strat text-left">
          <strong className="block ">{`เลขที่คำสั่งซื้อ: ${el.id.slice(
            0,
            6
          )}`}</strong>
          {/* <strong className="block">{`หมายเลขสลาก: ${}`}</strong> */}
          <strong className="block">{`จำนวน: ${el.OrderDetails?.length}`}</strong>
          <div></div>
          <span className="block">{`สถานะ : ${
            el.status === "PENDING" ? "ยังไม่ชำระ" : el.status
          }`}</span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="block cursor-default">{`รวมยอดชำระ : ${priceSum} บาท`}</span>
          <div className="hover:-translate-y-1 hover:scale-120  duration-300">
            <SmPillButton
              text="ดำเนินการต่อ"
              onClick={() => {
                setQr(null);

                F(el.id);
              }}
            />
            <span className="block cursor-default">{`ระยะเวลา : ${el.createdAt
              .split("T")[1]
              .slice(0, 8)} วินาที`}</span>
          </div>
        </div>
        {paymodal ? (
          <ModalQrpayform
            Order={el}
            ordertopay={ordertopay}
            Qr={Qr}
            setpaymodal={setpaymodal}
            priceSum={priceSum}
          />
        ) : null}
      </div>
    </>
  );
}

export default UsertransCard;
