import React from "react";
import { Outlet } from "react-router-dom";

import HeaderBase from "../components/header/HeaderBase";

function Authlayout() {
  return (
    <div className=" min-h-screen">
      <HeaderBase />
      <Outlet />
    </div>
  );
}

export default Authlayout;
