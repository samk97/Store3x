import React, { useState, useEffect } from "react";
import ProductCard from "../Product/ProductCard";
import { fetchData } from "../../utils/Shop";
import { addToCartHandler } from "../../utils/Cart";
import Alert from "../UI/Alert";

const Recomendation = () => {
    const [products, setProducts] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    const [alertMsgType, setAlertMsgType] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

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
    <div className="container pb-16">
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType={alertMsgType}
          message={alertMsg}
        />
      )}
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Recommended for you
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.productId} // Assuming productId is unique
            title={product.title}
            price={product.price}
            addToCartHandler={() => addToCartHandler(product.productId)}
            bgImage={product.bgImage}
            rating={product.rating}
            discount_percent={product.discount_percent}
            productId={product.productId}
          />
        ))}
      </div>
    </div>
  );
};

export default Recomendation;
