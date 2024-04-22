
const sellerApiUrl = process.env.REACT_APP_SELLER_API_URL;

export function random() {
  let min = 1;
  let max = 1000000;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

export const getAllProductsForSeller = async (sellerId) => {
  if(!sellerId)
  return {
    success: false,
    message: "You are not logged In, Please login !!!",
  };
  const apiUrl = `${sellerApiUrl}/products/${sellerId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return null;
};
