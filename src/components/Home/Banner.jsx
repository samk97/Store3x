import React from "react";
import Bg from "../../assets/images/banner-bg.jpg";

const Banner = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collection for <br /> home decoration
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <button
            type="button"
            onClick={handleButtonClick}
            className="check bg-red-700 border border-red-700 text-white px-8 py-3 font-medium 
              rounded-md hover:bg-transparent hover:text-red-700"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
