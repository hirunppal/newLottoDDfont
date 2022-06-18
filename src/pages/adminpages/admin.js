import React, { useState } from "react";
import AdSidebar from "../../components/admins/sidelayout/AdSidebar";
import PdCreate from "../../components/admins/ProductsManage/PdCreate";
import ProductList from "../../components/admins/ProductsManage/Productlist";
import Adsearch from "../../components/admins/adSearchtop/Adsearch";
import { AdminContextProvider } from "../../context/AdminContext";

function Modlayout() {
  const [modmodules, Setmodmodules] = useState("PRODUCT");
  return (
    <AdminContextProvider>
      <div className="flex w-screen bg-zinc-900  text-font-Kanit">
        <AdSidebar Setmodmodules={Setmodmodules} />
        <div className=" flex flex-col items-center w-full m-1 pr-5">
          {modmodules === "PRODUCT" ? (
            <>
              <Adsearch />
              <ProductList />
            </>
          ) : (
            <PdCreate />
          )}
        </div>
      </div>
    </AdminContextProvider>
  );
}

export default Modlayout;
