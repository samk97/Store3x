import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCog,faClipboardList,faStore } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { fetchUser,logout } from "../../utils/Auth";

const Header = () => {
  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const wishlistItems = ["Item 1", "Item 2", "Item 3"]; // Example wishlist items
  const cartItems = ["Item A", "Item B"]; // Example cart items

  const handleCartHover = () => {
    setCartPopupOpen(true);
  };

  const handleCartLeave = () => {
    setCartPopupOpen(false);
  };

  const handleLogout = () => {
    logout(); // Call the logout function
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-52" />
        </Link>

        {/* Search Bar */}
        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full border border-red-700 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
            placeholder="search"
          />
          <button className="bg-red-700 border border-red-700 text-white px-8 rounded-r-md hover:bg-transparent hover:text-red-700 transition hidden md:flex items-center justify-center">
            Search
          </button>
        </div>

        {/* User Icons */}
        <div className="flex items-center space-x-4">
          {/* Wishlist */}
          <Link to="wishlist">
            <div className="relative text-center text-gray-700 hover:text-red-700 transition">
              <div className="text-2xl">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-700 text-white text-xs">
                {wishlistItems.length}
              </div>
            </div>
          </Link>

          {/* Cart */}
          <div
            className="relative text-center text-gray-700 hover:text-red-700 transition"
            onMouseEnter={handleCartHover}
            onMouseLeave={handleCartLeave}
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-700 text-white text-xs">
              {cartItems.length}
            </div>
            {cartPopupOpen && <Cart />}
          </div>

          <div className=" relative text-center text-gray-700 hover:text-red-700 transition   relative group">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="text-xs leading-3">Account</div>

            {/* dropdown */}
            <div className="absolute right-0 bg-white shadow-md py-2 px-2 rounded-md  border-t-2  border-gray-800 z-50 shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6  text-sm">Profile</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6  text-sm">Orders</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
              >
                <FontAwesomeIcon
                  icon={faStore}
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6  text-sm">
                  Seller Account
                </span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
              >
                <FontAwesomeIcon
                  icon={faCog}
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6  text-sm">setting</span>
              </a>

              <button
                onClick={handleLogout}
                className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="w-5 h-5 object-contain"
                  
                />
                <span className="ml-6  text-sm">Logout</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
