import React, { useState } from "react";
import { useProduct } from "../../context/productsContext";
import Cartscard from "./Cartscard";
import Footcart from "./Footcart";
function Cartlists({ sumPrice }) {
  const [onCartEdit, setOncartEdit] = useState(false);
  const { cartItems } = useProduct();
  // console.log(cartItems[1]);

  return (
    <>
      <div className="flex flex-col ">
        <div className=" flex flex-row justify-between">
          <div className=" text-2xl mb-4 pt-3 ">
            <h2 className=" text-left">{`รายการในตระกร้า : ${
              cartItems.length + ""
            } ใบ`}</h2>
          </div>
          <div
            className=" self-end -mr-10 cursor-pointer text-xs underline"
            onClick={() => {
              setOncartEdit(true);
            }}
          >
            แก้ไข
          </div>
        </div>
        <div className="flex flex-row px-lg-5 mx-lg-5">
          <div className="px-5 mr-5">สลากเลขที่</div>
          <div className="px-5 ml-5">ชุดที่</div>
          <div className="px-5 ml-1">จำนวน</div>
          <div className="px-5 ml-3">รวมราคา</div>
        </div>

        {cartItems.map((el) => (
          <Cartscard cartItem={el} onCartEdit={onCartEdit} />
        ))}
        <Footcart sumPrice={sumPrice} />
      </div>
    </>
  );
}

export default Cartlists;
