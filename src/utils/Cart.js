const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;
const cartApiUrl = process.env.REACT_APP_CART_API_URL;

let user = "vipin@gmail.com";
export const fetchData = () => {
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
        const productResponse = await fetch(
          productsApiUrl + "/" + item.product_id
        );

        const productData = await productResponse.json();
        return productData;
      } catch (error) {
        console.error("Error fetching cart products:", error);
        throw error; // Propagate the error to Promise.all
      }
    })
  );
};
