import React from "react";
import ProductCard from "../Product/ProductCard";

const ProductList = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
