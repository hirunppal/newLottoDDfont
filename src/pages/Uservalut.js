import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cartscard from "../components/checkout/Cartscard";
import Mbutton from "../components/common Utils/Mbutton";
import UsertransCard from "../components/Vault/UsertransCard";
import VoultNotfound from "../components/Vault/VoultNotfound";
import { useAuth } from "../context/auth";
import { useProduct } from "../context/productsContext";

function Uservalut() {
  const [paidValut, setpaidValut] = useState(null);
  const { user } = useAuth();
  const { orders, setOrders } = useProduct();

  //   console.log(Orders);
  useEffect(() => {
    if (user) {
      setOrders(user.Orders);
      const getPaidOrder = async () => {
        orders.filter((el) => {
          if ((el.status = "PAID")) return el;
        });
        const paidarr = await getPaidOrder();
        setpaidValut(paidarr);
      };
    }
  }, []);
  //   console.log(paidValut);
  //   const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="py-6 overflow-y-hidden">
      <div className="w-full px-6 text-font-Kanit">
        <div className="mt-8 relative rounded-lg bg-gray-50  container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 flex-nowrap xl:flex-wrap">
          {orders ? (
            <>
              <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10 border-b-2">
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-gray-600/60 font-bold leading-tight">
                  {`ประวัติคำสั่งซื้อ : ${orders?.length} รายการ`}
                </h1>
              </div>

              {orders?.map((el, idx) => {
                return <UsertransCard el={el} key={idx} />;
              })}

              <div className="flex justify-center items-center mb-10 sm:mb-20"></div>

              <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10 border-b-2 flex min-w-80  justify-center ">
                {paidValut ? (
                  <>
                    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-gray-600/60 font-bold leading-tight">
                      {`สลากของฉัน :${paidValut?.length}`}
                    </h1>
                    {/* <Mbutton title={"แสดงสลากของฉัน"} onClicl={() => {}} /> */}
                  </>
                ) : (
                  <h1 className="text-base mt-1 ml-1 sm:text-lg md:text-1xl lg:text-2xl text-left text-gray-600/60 font-normal leading-tight self-center">
                    ยังไม่มีสลากกินแบ่งที่ชำระแล้ว ในคลังของท่าน
                  </h1>
                )}
              </div>
              <div className="flex justify-center items-center mb-10 sm:mb-20"></div>
            </>
          ) : (
            <VoultNotfound />
          )}
        </div>
      </div>
    </div>
  );
}
export default Uservalut;
