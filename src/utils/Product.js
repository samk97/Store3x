import axios from 'axios';

const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${productsApiUrl}/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
