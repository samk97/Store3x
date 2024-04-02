import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import { fetchData } from "../../utils/Shop";
import { addToCartHandler } from "../../utils/Cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const listData = await fetchData();
        setProducts(listData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.product_id}
          productId={product.product_id}
          title={product.name}
          price={product.price}
          bgImage={product.image_url}
          rating={product.rating}
          discount_percent={product.discount_percent}
          addToCartHandler={() => {
            addToCartHandler(product.product_id);
          }}
        />
      ))}
    </div>
  );
};

export default ProductList;
