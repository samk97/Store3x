import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { fetchData, fetchCartProductData } from "../../utils/Cart";
const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;
const cartApiUrl = process.env.REACT_APP_CART_API_URL;

const Cart = (props) => {
  let user = "vipin@gmail.com";
  let buyer_id = "vipin@gmail.com";
  const [usr, setUsr] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [total, setTotal] = useState(0);
  let subtotal = 0;

  useEffect(() => {
    setUsr(user);
    fetchData()
      .then((data) => {
        if (data.length > 0) {
          return fetchCartProductData(data);
        } else {
          return [];
        }
      })
      .then((productData) => {
        setCartProduct(productData);
        setTotal(calculateTotalPrice(productData));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [props.user]);

  const handleQuantityChange = (productId, newQuantity) => {
    setProductQuantities({
      ...productQuantities,
      [productId]: newQuantity,
    });
    setTotal(calculateTotalPrice(cartProduct));
  };

  const calculateTotalPrice = (products) => {
    return products
      .reduce((acc, product) => {
        const quantity = productQuantities[product.product_id] || 1;
        return acc + product.price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handleDeleteItem = async (buyer_id, product_id) => {
    try {
      const response = await fetch(
        `${cartApiUrl}/DeleteFromCart?buyerId=${buyer_id}&productId=${product_id}`,

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error("Error deleting item from cart:", response.statusText);
      } else {
        console.log("Item deleted from cart successfully.");
        fetchData()
          .then((data) => {
            if (data.length > 0) {
              return fetchCartProductData(data);
            } else {
              return [];
            }
          })
          .then((productData) => {
            setCartProduct(productData);
          });
      }
    } catch (error) {
      console.error("An error occurred while deleting item from cart:", error);
    }
  };

  return (
    <div className="absolute top-15 right-0 w-96 bg-white shadow-md py-2 px-4 rounded-md  border-t-2  border-gray-800 z-50">
      <div className="max-h-48 overflow-y-auto">
        <div className="w-11/12">
          {cartProduct.map((product) => (
            <CartItem
              key={product.product_id}
              itemName={product.name}
              quantity={1}
              price={product.price}
              imageUrl={product.image_url}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(product.product_id, newQuantity)
              }
              onDelete={() => handleDeleteItem(buyer_id, product.product_id)}
            />
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-800 my-4" />
      <div className="flex justify-between gap-5 items-center">
        <p className="text-gray-600 mb-6 text-sm">Subtotal</p>

        <p className="text-red-700 text-sm font-semibold">$1280.00</p>
      </div>

      <div className="flex justify-center gap-5">
        <button className="px-3 py-1 text-sm text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium">
          View Cart
        </button>
        <Link
          to="checkout"
          className="px-3 py-1 text-sm text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium"
        >
          Checkout Now
        </Link>
      </div>
    </div>
  );
};

export default Cart;
