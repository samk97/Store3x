import { Link } from "react-router-dom";
import React from "react";
import LogoIcon from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCog,
  faClipboardList,
  faStore,
  faUser,
  faBell,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../../utils/Auth";
import { useSelector } from "react-redux";
const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user_type = useSelector((state) => state.auth.user_type);

  const handleLogout = () => {
    logout();
  };

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
              <FontAwesomeIcon icon={faBars} />
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

        <div className="flex items-centersm:gap-7">
          <div className="flex items-center space-x-4">
            <Link to="wishlist">
              <div className="relative text-center text-gray-700 hover:text-red-700 transition">
                <div className="text-2xl">
                  <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="text-xs leading-3">Notifications</div>
              </div>
            </Link>

            <div
              className={`relative text-center text-gray-700  hover:text-red-700  transition group ${
                isLoggedIn ? "" : "pointer-events-none"
              }`}
            >
              <div className="text-2xl">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="text-xs leading-3">Account</div>

              <div className="absolute right-0 bg-white px-2 rounded-md  border-t-2  border-gray-800 z-50 shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <Link
                   to="/dashboard/seller-profile"
                  className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6  text-sm">Profile</span>
                </Link>

                <Link
                  to="/"
                  className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
                >
                  <FontAwesomeIcon
                    icon={faStore}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-sm">User Account</span>
                </Link>

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
                {isLoggedIn && (
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
                )}
              </div>
            </div>
          </div>

          {/* User Area */}

          {/* User Area */}
        </div>
      </div>
    </header>
  );
};

export default Header;
