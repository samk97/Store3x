import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const PopupWindow = ({ show, onClose, setLoginSucc }) => {
  const [showLogin, setShowLogin] = useState(true); // State to manage login form visibility
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginSuccess = () => {
    setLoginSucc(true);
    onClose(); // Close the popup upon successful login
  };

  return (
    show && (
      <div className="fixed text-left inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 z-50">
        <div
          ref={popupRef}
          className="max-w-lg w-4/12 mx-auto shadow px-6 py-7 rounded overflow-hidden bg-white relative"
        >
          {showLogin ? (
            <Login toggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} /> 
          ) : (
            <Signup toggleForm={toggleForm} />
          )}
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-50 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default PopupWindow;
