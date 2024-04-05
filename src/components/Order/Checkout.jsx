import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUser } from "../../utils/Auth";
const Checkout = () => {
  const [amt, setAmt] = useState(5002);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const CheckoutHandler = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4001/payment/createOrder",
        {
          amount: amt,
        }
      );
      const options = {
        key: "rzp_test_xSDzoLnvm4FR57",
        amount: amt,
        currency: "INR",
        name: "Store3x",
        description: "Thank you for ordering!",
        image:
          "https://media.licdn.com/dms/image/C4E0BAQEE7R4tHkZo0g/company-logo_200_200/0/1634669013028/simplify3x_logo?e=2147483647&v=beta&t=cH6l8K_SmFd-szwWHVxZ8PmEjmIh-i68RkYoa8D0Cuk",
        order_id: data.id,
        callback_url: "http://localhost:4001/payment/verifyPayment",
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
      };

      // Initialize Razorpay
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  return (
    <div className="col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x3</p>
          <p className="text-gray-800 font-medium">₹320</p>
        </div>
        {/* Add more order summary items here */}
      </div>
      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>₹1280</p>
      </div>
      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>₹1280</p>
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
