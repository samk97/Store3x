import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import Product1 from "../assets/images/products/product1.jpg";
import Product2 from "../assets/images/products/product2.jpg";
import Product3 from "../assets/images/products/product3.jpg";
import Product4 from "../assets/images/products/product4.jpg";
import Product5 from "../assets/images/products/product5.jpg";
import Product6 from "../assets/images/products/product6.jpg";

const Wishlist = () => {
  return (
<>
  {/* wishlist */}
  <div className="col-span-9 space-y-4">
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img
          src={Product6}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          Italian L shape
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-red-700 text-lg font-semibold">$320.00</div>
      <a
        href="#"
        className="px-6 py-2 text-center text-sm text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium"
      >
        add to cart
      </a>
      <div className="text-gray-600 cursor-pointer hover:text-red-700">
      <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img
          src={Product5}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          Dining Table
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-red-700 text-lg font-semibold">$320.00</div>
      <a
        href="#"
        className="px-6 py-2 text-center text-sm text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium"
      >
        add to cart
      </a>
      <div className="text-gray-600 cursor-pointer hover:text-red-700">
      <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img
          src={Product3}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-red-600">Out of Stock</span>
        </p>
      </div>
      <div className="text-red-700 text-lg font-semibold">$320.00</div>
      <a
        href="#"
        className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium"
      >
        add to cart
      </a>
      <div className="text-gray-600 cursor-pointer hover:text-red-700">
      <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
  </div>
  {/* ./wishlist */}
</>

  );
};

export default Wishlist;
