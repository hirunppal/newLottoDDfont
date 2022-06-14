import React, { useEffect, useState } from "react";
import Itemcards from "./itemcards";
import { useProduct } from "../../context/productsContext";
function ProductHero() {
  const { products } = useProduct();
  return (
    <div className="flex flex-row px-48">
      {products?.map((el) => (
        <Itemcards el={el} />
      ))}
    </div>
  );
}

export default ProductHero;
