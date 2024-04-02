import React from "react";
const CartItem = ({ itemName, price, imageUrl, onDelete }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 mb-2 ">
      <div className="w-32">
        <img src={imageUrl} alt={itemName} className="w-12 h-12" />
      </div>
      <div className="w-1/2">
        <h2 className="text-gray-800 text-sm font-medium uppercase">
          {itemName}
        </h2>
        <div className="text-red-700 text-sm font-semibold mt-1">₹{price}</div>
      </div>
      <button
        className="text-gray-600 hover:text-red-700 focus:outline-none"
        onClick={onDelete}
      >
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
  );
};

export default CartItem;
