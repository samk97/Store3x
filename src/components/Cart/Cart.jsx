import React from "react";
import Product1 from "../../assets/images/products/product1.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="absolute top-15 right-0 w-96 bg-white shadow-md py-2 px-4 rounded-md  border-t-2  border-gray-800">
      <div className="h-48 overflow-y-auto">
        <div className="w-11/12">
          <div className="flex items-center justify-between border-b border-gray-200 mb-2 ">
            <div className="w-32">
              <img src={Product1} alt="product 6" className="w-full" />
            </div>
            <div className="w-1/2">
              <h2 className="text-gray-800 text-sm font-medium uppercase">
                Italian L shape
              </h2>
              <div className="text-red-700 text-sm font-semibold mt-1">
                $320.00
              </div>
            </div>
            <button className="text-gray-600 hover:text-red-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 mb-2 ">
            <div className="w-32">
              <img src={Product1} alt="product 6" className="w-full" />
            </div>
            <div className="w-1/2">
              <h2 className="text-gray-800 text-sm font-medium uppercase">
                Italian L shape
              </h2>
              <div className="text-red-700 text-sm font-semibold mt-1">
                $320.00
              </div>
            </div>
            <button className="text-gray-600 hover:text-red-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 mb-2 ">
            <div className="w-32">
              <img src={Product1} alt="product 6" className="w-full" />
            </div>
            <div className="w-1/2">
              <h2 className="text-gray-800 text-sm font-medium uppercase">
                Italian L shape
              </h2>
              <div className="text-red-700 text-sm font-semibold mt-1">
                $320.00
              </div>
            </div>
            <button className="text-gray-600 hover:text-red-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 mb-2 ">
            <div className="w-32">
              <img src={Product1} alt="product 6" className="w-full" />
            </div>
            <div className="w-1/2">
              <h2 className="text-gray-800 text-sm font-medium uppercase">
                Italian L shape
              </h2>
              <div className="text-red-700 text-sm font-semibold mt-1">
                $320.00
              </div>
            </div>
            <button className="text-gray-600 hover:text-red-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 mb-2 ">
            <div className="w-32">
              <img src={Product1} alt="product 6" className="w-full" />
            </div>
            <div className="w-1/2">
              <h2 className="text-gray-800 text-sm font-medium uppercase">
                Italian L shape
              </h2>
              <div className="text-red-700 text-sm font-semibold mt-1">
                $320.00
              </div>
            </div>
            <button className="text-gray-600 hover:text-red-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Repeat the above div block for each cart item */}
        </div>
      </div>
      <hr className="border-t border-gray-800 my-4"/>
      <div className="flex justify-between gap-5 items-center">
        <p className="text-gray-600 mb-6 text-sm">Subtotal</p>

        <p className="text-red-700 text-sm font-semibold">$1280.00</p>
      </div>

      <div className="flex justify-center gap-5">
        <button className="px-3 py-1 text-sm text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium">
          View Cart
        </button>
        <Link to="checkout" className="px-3 py-1 text-sm text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium">
          Checkout Now
        </Link>
      </div>
    </div>
  );
};

export default Cart;
