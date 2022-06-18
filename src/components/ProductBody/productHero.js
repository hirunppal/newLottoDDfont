import React, { useEffect, useState } from "react";
import Itemcards from "./itemcards";
import { useProduct } from "../../context/productsContext";
function ProductHero() {
  const { products } = useProduct();
  return (
    <div className="flex flex-row flex-wrap px-48">
      {products ? (
        <>
          {products?.map((el) => (
            <Itemcards el={el} />
          ))}
        </>
      ) : (
        <div className=" flex-1 w-full bg-white">
          <>NO PRODUCT</>
        </div>
      )}
    </div>
  );
}

export default ProductHero;
