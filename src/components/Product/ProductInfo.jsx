import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductInfo = ({ name, rating, reviews, availability, brand, category, sku, price, discount }) => {
  return (
    <div className="text-left">
      <h2 className="text-3xl font-medium uppercase mb-2">{name}</h2>
      <div className="flex items-center mb-4">
        <div className="flex gap-1 text-sm text-yellow-400">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index}>
              <FontAwesomeIcon icon={faStar} />
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-500 ml-3">({reviews} Reviews)</div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          <span className="text-green-600">{availability}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{brand}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{category}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">{sku}</span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-red-700 font-semibold">${price.toFixed(2)}</p>
        <p className="text-base text-gray-400 line-through">${discount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
