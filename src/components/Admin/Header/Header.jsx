import { Link } from "react-router-dom";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell, FaUser, FaSearch, FaBars } from "react-icons/fa";
import LogoIcon from "../../../assets/images/logo.png";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-50 flex w-full bg-gray-50 shadow-sm border-b-2 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between p-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <div className="text-xl">
              <FaBars />
            </div>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block  flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" className="w-52" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <FaSearch />
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

        <div className="flex items-centersm:gap-7">
          <ul className="flex items-center gap-5 2xsm:gap-4">
            {/* Dark Mode Toggler */}
            <Link to="wishlist">
              <div className="relative text-center text-gray-700 hover:text-red-700 transition">
                <div className="text-2xl">
                  <IoSettingsSharp />
                </div>
                <div className="text-xs leading-3"></div>
              </div>
            </Link>

            {/* Cart */}
            <div className="relative text-center text-gray-700 hover:text-red-700 transition">
              <div className="text-2xl">
                <FaBell />
              </div>
            </div>

            {/* Account */}
            <Link
              to="/dashboard/seller-profile"
              className="text-center text-gray-700 hover:text-red-700 transition relative"
            >
              <div className="text-2xl">
                <FaUser />
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
