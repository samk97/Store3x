import Swal from "sweetalert2";
const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;
const cartApiUrl = process.env.REACT_APP_CART_API_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(productsApiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return "";
};

export const addToCartHandler = async (product_id, buyerId, quantity = 1) => {
  const url = `${cartApiUrl}/AddToCart`;
  const data = {
    product_id: product_id,
    buyer_id: buyerId,
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

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Item added to cart successfully:", responseData);
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
  handleClick();
};

const handleClick = () => {
  Swal.fire({
    title: "Added To Cart!",
    text: "",
    icon: "success",
    iconColor: "tomato",
    showConfirmButton: false,
    timer: 1000,
  });
};
