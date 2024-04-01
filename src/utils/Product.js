const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${productsApiUrl}/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
