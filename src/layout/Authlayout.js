import React from "react";
import { Outlet } from "react-router-dom";

import HeaderBase from "../components/header/HeaderBase";

function Authlayout() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <HeaderBase />
      <Outlet />
    </div>
  );
}

export default Authlayout;
