import axios from "axios";
import { getProductById } from "./Product";

export const getOrderItems = async (orderId) => {
  try {
    const response = await axios.get(`https://localhost:4002/Buy/${orderId}`);

    if (response.status === 200) {
      const orderItems = response.data;

      // Create an array to hold product details
      const productDetailsArray = [];

      // Fetch product details for each order item
      for (const item of orderItems) {
        const productDetail = await getProductById(item.product_id);
        productDetailsArray.push(productDetail);
      }

      return productDetailsArray;
    } else {
      throw new Error("Failed to retrieve order items");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
