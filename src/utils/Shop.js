
const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(productsApiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return null;
};

