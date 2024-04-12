import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


import LogoIcon from "./images/logo/logo-icon.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          ></button>
          {/* Hamburger Toggle BTN */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
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
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Dark Mode Toggler */}
            <Link to="wishlist">
              <div className="relative text-center text-gray-700 hover:text-red-700 transition">
                <div className="text-2xl">
                  <FontAwesomeIcon icon={faCog} />
                </div>
                <div className="text-xs leading-3"></div>
              </div>
            </Link>

            {/* Cart */}
            <div className="relative text-center text-gray-700 hover:text-red-700 transition">
              <div className="text-2xl">
                <FontAwesomeIcon icon={faBell} />
              </div>
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
            {/* Chat Notification Area */}
          </ul>

          {/* User Area */}

          {/* User Area */}
        </div>
      </div>
    </header>
  );
};

export default Header;
