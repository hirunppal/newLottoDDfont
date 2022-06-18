import React, { useEffect } from "react";
import SmPillButton from "../header/unity/SmPillButton";
import parse from "html-react-parser";
import { useProduct } from "../../context/productsContext";

function ModalQrpayform({ Qr, setpaymodal, priceSum, ordertopay }) {
  // console.log(ordertopay);
  // console.log("ordertopay");
  useEffect(() => {
    console.log(ordertopay);
    console.log("ordertopay");
  }, []);
  return (
    <div
      id="medium-modal"
      className=" overflow-y-auto overflow-x-hidden fixed m-auto z-40 w-screen  bg-neutral/20 md:inset-0 h-modal md:h-screen flex  justify-center"
      onClick={() => {
        setpaymodal(false);
      }}
    >
      <div className=" text-slate-600 p-4 w-full max-w-lg h-full md:h-auto items-center z-50">
        <div
          className="flex flex-col bg-white rounded-lg h-2/3  my-40 shadow items-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="Header flex flex-initial flex-row w-full justify-between">
            <strong className="text-sm m-2 ml-4 mt-5 block self-start">{`รหัสคำสั่งซื่อ: ${ordertopay[0].orderId}`}</strong>
            <div className="">
              <SmPillButton
                text="x"
                onClick={(e) => {
                  setpaymodal(false);
                }}
              />
            </div>
          </div>
          <div className="Body flex flex-auto w-full flex-col mt-5">
            <div className=" flex justify-around">
              <div className="w-1/2 self-center ">
                <div>
                  <span>{`รวมยอดชำระ : ${priceSum} บาท`}</span>
                </div>
                <div>
                  <span>{`จำนวนสลาก: ${ordertopay?.length} ใบ`}</span>
                  <div className="overflow-y-hidden overflow-x-auto w-full h-10 bg-slate-400/30 flex flex-row">
                    <span className="m-2">เลขสลาก:</span>

                    {ordertopay.map((el) => {
                      // console.log(el);
                      return <SmPillButton text={el.Product.lottoNum} />;
                    })}

                    {/* <span>{`รายการ: ${Order.OrderDetails?.length}`}</span> */}
                  </div>

                  {/* <span> 061-3987-015</span> */}
                </div>
              </div>
              <div className="w-1/3 self-center ">
                <span>พร้อมเพย์ LottoDD</span>
                {Qr ? <>{parse(`${Qr}`)}</> : null}
                <span> 061-3987-015</span>
              </div>
            </div>
          </div>
          <span> หากท่านดำเนินการโอนเสร็จเรียบร้อยแล้ว </span>
          <SmPillButton text={`อัพโหลดหลักฐานการโอน`} onClick={(e) => {}} />
          <div className="flex flex-auto w-full flex-row">
            <div className="flex flex-row">
              {/* <SmPillButton text={Order.id} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalQrpayform;
