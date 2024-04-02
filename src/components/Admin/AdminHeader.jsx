import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartPopupOpen, setCartPopupOpen] = useState(false);

  const wishlistItems = ["Item 1", "Item 2", "Item 3"]; // Example wishlist items
  const cartItems = ["Item A", "Item B"]; // Example cart items

  const handleCartHover = () => {
    setCartPopupOpen(true);
  };

  const handleCartLeave = () => {
    setCartPopupOpen(false);
  };

  return (
    <header className="py-4 shadow-sm bg-white fixed w-screen">
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
                <FontAwesomeIcon icon={faCog} />
              </div>
              <div className="text-xs leading-3"></div>
              
            </div>
          </Link>

          {/* Cart */}
          <div
            className="relative text-center text-gray-700 hover:text-red-700 transition"
            onMouseEnter={handleCartHover}
            onMouseLeave={handleCartLeave}
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="text-xs leading-3"></div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-700 text-white text-xs">
              {cartItems.length}
            </div>
            {cartPopupOpen && <Cart />}
          </div>

          {/* Account */}
          <Link
            to="/seller-profile"
            className="text-center text-gray-700 hover:text-red-700 transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>

            <div className="text-xs leading-3"></div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
