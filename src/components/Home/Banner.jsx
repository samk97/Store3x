import React from "react";
import Bg from "../../assets/images/banner-bg.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  

  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
        Lorem, ipsum dolor  <br />met consectetur adipisicing elit
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <Link
            to="/shop"
            className="check bg-red-700 border border-red-700 text-white px-8 py-3 font-medium 
              rounded-md hover:bg-transparent hover:text-red-700"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
