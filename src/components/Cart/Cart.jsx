import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  UserCartItems,
  fetchCartProductData,
  handleDeleteItem,
} from "../../utils/Cart";

const Cart = (props) => {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    UserCartItems()
      .then((data) => {
        if (data.length > 0) {
          return fetchCartProductData(data);
        } else {
          return [];
        }
      })
      .then((productData) => {
        setCartProduct(productData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [props.user]);

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
              onDelete={() => handleDeleteItem(product.product_id)}
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
