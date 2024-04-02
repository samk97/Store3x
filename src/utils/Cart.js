import axios from "axios";
import { fetchUser } from "./Auth";
const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;
const cartApiUrl = process.env.REACT_APP_CART_API_URL;

let user = fetchUser().email;

export const UserCartItems = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(cartApiUrl + "/" + user);
      const data = await response.json();

      resolve(data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
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

export const addToCartHandler = async (product_id, quantity = 1) => {
  const url = `${cartApiUrl}/AddToCart`;
  const data = {
    product_id: product_id,
    buyer_id: user,
    quantity: quantity,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status == 201) {
      return {
        success:true,
        message:"Item Added Successfully !!!"
      }
    } else if (response.status == 409) {
      return {
        success:false,
        message:"Item already exists !!!"
      }
      
    }
  } catch (error) {
    return {
      success:false,
      message:"Error !!!!"
    }
    
    
  }
};

export const handleDeleteItem = async (product_id) => {
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
