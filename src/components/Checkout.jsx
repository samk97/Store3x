import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentSuccessfulPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful
        </h2>
        <p className="text-gray-600 mb-4">Thank you for your purchase!</p>

        <div>
          <button
            onClick={onClose}
            className=" mr-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>

          <Link to="/order">
            <button
              onClick={onClose}
              className="ml-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              View Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePlaceOrder = () => {
    // Perform logic to place the order here
    // For demo purposes, just simulate the success after 2 seconds
    setTimeout(() => {
      setIsPaymentSuccessful(true);
    }, 1000);
  };

  const handleClosePopup = () => {
    setIsPaymentSuccessful(false);
  };


  return (
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <div className="col-span-8 border border-gray-200 p-4 rounded">
        <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="text-gray-600">
                First Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="input-box"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-gray-600">
                Last Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="input-box"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="text-gray-600">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="region" className="text-gray-600">
              Country/Region
            </label>
            <input
              type="text"
              name="region"
              id="region"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="address" className="text-gray-600">
              Street address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-600">
              City
            </label>
            <input type="text" name="city" id="city" className="input-box" />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600">
              Phone number
            </label>
            <input type="text" name="phone" id="phone" className="input-box" />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600">
              Email address
            </label>
            <input type="email" name="email" id="email" className="input-box" />
          </div>
          <div>
            <label htmlFor="company" className="text-gray-600">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              className="input-box"
            />
          </div>
        </div>
      </div>
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
            <p className="text-gray-800 font-medium">$320</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
              <p className="text-sm text-gray-600">Size: M</p>
            </div>
            <p className="text-gray-600">x3</p>
            <p className="text-gray-800 font-medium">$320</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
              <p className="text-sm text-gray-600">Size: M</p>
            </div>
            <p className="text-gray-600">x3</p>
            <p className="text-gray-800 font-medium">$320</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
              <p className="text-sm text-gray-600">Size: M</p>
            </div>
            <p className="text-gray-600">x3</p>
            <p className="text-gray-800 font-medium">$320</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
          <p>subtotal</p>
          <p>$1280</p>
        </div>
        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
          <p>shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
          <p className="font-semibold">Total</p>
          <p>$1280</p>
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
          onClick={handlePlaceOrder}
          className="block w-full py-3 px-4 text-center text-white bg-red-700 border border-red-700 rounded-md hover:bg-transparent hover:text-red-700 transition font-medium"
        >
          Place order
        </button>
        {isPaymentSuccessful && (
          <PaymentSuccessfulPopup onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
