import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Home/Banner";
import Feature from "../Home/Features";
import Adds from "../Home/Adds";
import Recomendation from "../Home/Recomendation";
import Category from "../Home/Category";
import NewArrival from "../Home/NewArrival";


const HomeLayout = () => {
  return (
    <div>
      <Banner/>
      <Feature/>
      <Category/>
      <NewArrival/>
      <Adds/>
      <Recomendation/>  
    </div>
  );
};

export default HomeLayout;
