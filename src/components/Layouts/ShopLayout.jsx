import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../UI/Breadcrumb";
const Layout = () => {
  return (
    <>
      <Breadcrumb />
      <Outlet />
    </>
  );
};

export default Layout;
