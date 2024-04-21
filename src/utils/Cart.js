import axios from "axios";
import { fetchUser } from "./Auth";
const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;
const cartApiUrl = process.env.REACT_APP_CART_API_URL;



export const UserCartItems = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(cartApiUrl + "/" + user);
      const data = await response.json();

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchCartProductData = (cartData) => {
  return Promise.all(
    cartData.map(async (item) => {
      try {
        const productResponse = await axios.get(
          productsApiUrl + "/" + item.product_id
        );
        return productResponse.data;
      } catch (error) {
        console.error("Error fetching cart products:", error);
        throw error; // Propagate the error to Promise.all
      }
    })
  );
};

export const addToCartHandler = async (user,product_id, quantity = 1) => {
  const url = `${cartApiUrl}/AddToCart`;

  const data = {
    product_id: product_id,
    buyer_id: user,
    quantity: quantity,
  };

  try {
    const response = await axios.post(url, data);

    if (response.status === 201) {
      return {
        success: true,
        message: "Item Added Successfully in Cart !!!",
      };
    } else {
      return {
        success: false,
        message: "Error !!!",
      };
    }
  } catch (error) {
    let errorMessage = "An error occurred while adding item to cart.";
    if (error.response && error.response.data) {
      errorMessage = error.response.data;
    }
    return {
      success: false,
      message: errorMessage,
    };
  }
};

export const handleDeleteItem = async (user,product_id) => {
  try {
    const response = await fetch(
      `${cartApiUrl}/DeleteFromCart?buyerId=${user}&productId=${product_id}`,
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
      return true;
    }
  } catch (error) {
    console.error("An error occurred while deleting item from cart:", error);
    throw error;
  }
};
