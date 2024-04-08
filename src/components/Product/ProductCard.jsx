import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Alert from "../UI/Alert";

const ProductCard = ({
  title,
  price,
  addToCartHandler,
  bgImage,
  rating,
  discount_percent,
  productId,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
  };

  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Link to={`product/${productId}`}>
          <img src={bgImage} alt={title} className="w-full h-60" />

          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
          justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-red-700 flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-red-700 flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
        </Link>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-700 transition">
            {title}
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-red-700 font-semibold">
            ₹{Math.floor(price - (price * discount_percent) / 100)}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ₹{Math.floor(price)}
          </p>
          <p className="text-sm text-green-400 ">{discount_percent}% off</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-white bg-green-500 px-1">
            <span>
              {rating} <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <button
        onClick={addToCartHandler}
        className="block w-full py-1 text-center text-white bg-red-700 border border-red-700 rounded-b hover:bg-transparent hover:text-red-700 transition"
      >
        Add to cart
      </button>
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType="success"
          message="Item added to cart !"
        />
      )}
    </div>
  );
};

export default ProductCard;
