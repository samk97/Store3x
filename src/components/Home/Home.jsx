import React from "react";
import Banner from "./Banner";
import Feature from "./Features";
import Adds from "./Adds";
import Recomendation from "./Recomendation";
import Category from "./Category";
import NewArrival from "./NewArrival";


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
