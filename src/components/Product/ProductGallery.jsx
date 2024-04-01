import React from 'react';

const ProductGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product ${index}`}
          className="w-full cursor-pointer border"
        />
      ))}
    </div>
  );
};

export default ProductGallery;
