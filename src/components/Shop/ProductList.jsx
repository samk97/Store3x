import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import { fetchData } from "../../utils/Shop";
import { addToCartHandler } from "../../utils/Cart";
import Alert from "../UI/Alert";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertMsgType, setAlertMsgType] = useState("");

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

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCartHandler(productId);
      setShowAlert(true);
      console.log(response);

      if (response.success) {
        setAlertMsg(response.message);
        setAlertMsgType("success");
      } else {
        setAlertMsg(response.message);
        setAlertMsgType("NA");
      }
    } catch (error) {
      setAlertMsg(error.message);
      setAlertMsgType("fail");
    }
  };

  return (
    <>
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType={alertMsgType}
          message={alertMsg}
        />
      )}
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
            addToCartHandler={() => handleAddToCart(product.product_id)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
