import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUser } from "../../utils/Auth";
import { fetchCartProductData, UserCartItems } from "../../utils/Cart";
import { random } from "../../utils/Seller";

const Checkout = (props) => {
  console.log(props);
  const [user, setUser] = useState(null);
  const [cartProduct, setCartProduct] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const refreshCart = () => {
    let fetchedData; // Define a variable to hold fetched data

    UserCartItems()
      .then((data) => {
        fetchedData = data; // Store fetched data in a variable accessible in the next then block
        if (data.length > 0) {
          return fetchCartProductData(data);
        } else {
          return [];
        }
      })
      .then((productData) => {
        productData = productData.map((item) => ({
          ...item,
          quantity: fetchedData.find((d) => d.product_id === item.product_id)
            .quantity,
        }));
        //console.log(productData);
        setCartProduct(productData);
        calculateSubtotal(productData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const calculateSubtotal = (products) => {
    const total = products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setSubtotal(total);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getCurrentDate();
    refreshCart();
    fetchData();
  }, []);

  const CheckoutHandler = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4001/payment/createOrder",
        {
          amount: subtotal + (subtotal < 500 ? 40 : 0),
        }
      );
      //handleCheckout();
      const options = {
        key: "rzp_test_xSDzoLnvm4FR57",
        amount: subtotal + (subtotal < 500 ? 40 : 0),
        currency: "INR",
        name: "Store3x",
        description: "Thank you for ordering!",
        image:
          "https://media.licdn.com/dms/image/C4E0BAQEE7R4tHkZo0g/company-logo_200_200/0/1634669013028/simplify3x_logo?e=2147483647&v=beta&t=cH6l8K_SmFd-szwWHVxZ8PmEjmIh-i68RkYoa8D0Cuk",
        order_id: data.id,
        handler: function (response) {
          handleCheckout(response.razorpay_payment_id);
        },

        callback_url: "http://localhost:3000/order",
        prefill: {
          name: user ? `${user.fname} ${user.lname}` : "",
          email: user ? user.email : "",
          contact: "9000090000",
        },
        notes: {
          address: "Simplify3x, BCIT",
        },
        theme: {
          color: "#b91c1c",
        },
        modal: {
          ondismiss: function () {
            console.log("payment Failed");
          },
        },
      };

      // Initialize Razorpay
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  //order
  const [currentDate, setCurrentDate] = useState(null);
  const [delDate, setDelDate] = useState(null);
  const getCurrentDate = () => {
    const date = new Date();
    setCurrentDate(date.toISOString());
    date.setDate(date.getDate() + 2);
    setDelDate(date.toISOString());
  };
  //update data in cart

  //
  const handleCheckout = async (paymentId) => {
    getCurrentDate();
    const orderData = {
      order_id: random(),
      buyer_id: fetchUser().email,
      card_id: 101,
      total_price: subtotal + (subtotal < 500 ? 40 : 0),
      order_date: currentDate,
      tax: 1,
      shipping_price: subtotal < 500 ? 40 : 0,
      delivery_address_id: props.selectedAddress,
      delivery_date: delDate,
      order_status: "C",
      quantity: 3,
      payment_id: paymentId,
    };

    try {
      // Make a POST request to your backend API
      const response = await axios.post(
        "https://localhost:4002/api/Orders",
        orderData
      );
      console.log("Order inserted successfully(Payment Id):", paymentId);
      handleBuy(orderData.order_id);
    } catch (error) {
      console.error("Error inserting order:", error.response.data);
      // Handle error scenario, e.g., display an error message to the user
    }

    console.log(orderData);
  };
  //console.log(cartProduct);
  const handleBuy = async (orderId) => {
    try {
      // Map each cart item to a promise representing the axios request
      const promises = cartProduct.map(async (cartItem) => {
        const buyData = {
          order_id: orderId,
          product_id: cartItem.product_id,
          quantity: cartItem.quantity,
        };
        console.log(buyData);
        const response = await axios.post(
          "https://localhost:4002/Buy/AddtoBuy",
          buyData
        );
        console.log("Inserted product:", response.data);
      });
      await Promise.all(promises);

      console.log("All products inserted successfully.");
    } catch (error) {
      console.error("Error inserting products:", error);
    }
  };

  return (
    <div className="col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {cartProduct.map((product) => (
          <div className="flex justify-between" key={product.productId}>
            <div>
              <h5 className="text-gray-800 font-medium">{product.name}</h5>
            </div>
            <p className="text-gray-600">x{product.quantity}</p>
            <p className="text-gray-800 font-medium">
              ₹{product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>₹{subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        {<p>{subtotal < 500 ? "₹ 40" : "Free"}</p>}
      </div>
      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        {
          <p>
            ₹
            {subtotal >= 500 ? subtotal.toFixed(2) : (subtotal + 40).toFixed(2)}
          </p>
        }
      </div>
      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          name="aggrement"
          id="aggrement"
          className="text-red-700 focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          htmlFor="aggrement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <a href="#" className="text-red-700">
            terms &amp; conditions
          </a>
        </label>
      </div>
      <button
        onClick={CheckoutHandler}
        className="block w-full py-3 px-4 text-center text-white bg-red-700 border border-red-700 rounded-md hover:bg-transparent hover:text-red-700 transition font-medium"
      >
        Place order
      </button>
    </div>
  );
};

export default Checkout;
