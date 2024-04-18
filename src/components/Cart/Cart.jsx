import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Alert from "../UI/Alert";
import {
  UserCartItems,
  fetchCartProductData,
  handleDeleteItem,
} from "../../utils/Cart";

import { useSelector } from "react-redux";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertMsgType, setAlertMsgType] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  let user = useSelector((state) => state.auth.user);

  const refreshCart = () => {
    UserCartItems(user)
      .then((data) => {
        if (data.length > 0) {
          return fetchCartProductData(data);
        } else {
          return [];
        }
      })
      .then((productData) => {
        setCartProduct(productData);
        calculateSubtotal(productData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const calculateSubtotal = (products) => {
    const total = products.reduce((acc, curr) => acc + curr.price, 0);
    setSubtotal(total);
  };

  const handleDeleteAndUpdateCart = async (productId) => {
    try {
      await handleDeleteItem(user, productId);
      setAlertMsg("Item deleted from cart successfully !!!");
      setShowAlert(true);
      setAlertMsgType("success");
    } catch (error) {
      setAlertMsg("Error deleting item from cart !!!");
      setShowAlert(true);
      setAlertMsgType("fail");
    }
    refreshCart();
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide the alert after 3 seconds
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="absolute top-15 right-0 w-96 bg-white shadow-sm p-2 px-4 rounded-md border border-t-2  border-gray-800 z-50"
        onClick={handleCartClick}
      >
        {cartProduct.length === 0 ? (
          <p className="text-center text-gray-600 m-4">Your cart is empty.</p>
        ) : (
          <>
            <div className="max-h-48 overflow-y-auto">
              <div className="w-11/12">
                {cartProduct.map((product) => (
                  <CartItem
                    key={product.product_id}
                    itemName={product.name}
                    quantity={1}
                    price={product.price}
                    imageUrl={product.image_url}
                    onDelete={() =>
                      handleDeleteAndUpdateCart(product.product_id)
                    }
                  />
                ))}
              </div>
            </div>
            <hr className="border-t border-gray-800 my-4" />
            <div className="flex justify-between gap-5 items-center">
              <p className="text-gray-600 mb-6 text-sm">Subtotal</p>
              <p className="text-red-700 text-sm font-semibold">
                ₹{subtotal.toFixed(2)}
              </p>
            </div>

            <div className="flex justify-center gap-5">
              <Link
                to="address"
                className="px-3 py-1 text-sm text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium"
              >
                Checkout Now
              </Link>
            </div>
          </>
        )}
        {showAlert && (
          <Alert
            setShowAlert={setShowAlert}
            messageType={alertMsgType}
            message={alertMsg}
          />
        )}
      </div>
    </>
  );
};

export default Cart;
