import React from "react";
import Itemcards from "./itemcards";
function ProductHero() {
  return (
    <div className="flex flex-row px-48">
      <Itemcards />
      <Itemcards />
      <Itemcards />
      <Itemcards />
    </div>
  );
}

export default ProductHero;
