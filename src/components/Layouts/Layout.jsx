import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Copyright from "../UI/Copyright";
import Navbar from "../UI/Navbar";
import Breadcrumb from "../UI/Breadcrumb";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <Breadcrumb />
      <Outlet />
      <Footer />
      <Copyright/>
    </div>
  );
};

export default Layout;
