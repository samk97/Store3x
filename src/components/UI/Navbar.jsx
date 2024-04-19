import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PopupWindow from "../Login/PopupWindow";
import { fetchUser } from "../../utils/Auth";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginSucc, setLoginSucc] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    console.log("Login Clicked !!");
  };
  const handleClosePopup = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    const checkUser = fetchUser();
    if (checkUser) {
      setLoggedIn(true);
      setUser(checkUser);
      console.log(user);
    } else {
      setLoggedIn(false);
      setUser(null);
    }
  }, [loginSucc]);

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-red-700 md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <Link to="/" className="text-gray-200 hover:text-white transition">
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>

            <Link
              to="/About"
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>
          {loggedIn ? (
            <p className="text-gray-200 hover:text-white transition capitalize">
              Welcome, {user.fname}
            </p>
          ) : (
            <button
              onClick={handleLoginButtonClick}
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </button>
          )}

          <PopupWindow
            show={showLogin}
            setLoginSucc={setLoginSucc}
            onClose={handleClosePopup}
            isSeller={false}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
