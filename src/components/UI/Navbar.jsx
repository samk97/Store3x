import React, { useState } from "react";
import { Link } from 'react-router-dom';

import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faGithubSquare,
  faInstagram,
  faInstagramSquare,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sofa from "../../assets/images/icons/sofa.svg";
import Terrace from "../../assets/images/icons/terrace.svg";
import Office from "../../assets/images/icons/office.svg";
import Bed from "../../assets/images/icons/bed.svg";
import Bed2 from "../../assets/images/icons/bed-2.svg";
import OutdoorCafe from "../../assets/images/icons/outdoor-cafe.svg";
import PopupWindow from "../Login/PopupWindow";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    console.log("Login Clicked !!");
  };
  const handleClosePopup = () => {
    setShowLogin(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-red-700 md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="capitalize ml-2 text-white hidden">
            All Categories
          </span>
          {/* dropdown */}
          <div className="absolute  left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={Sofa} alt="sofa" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={Terrace}
                alt="terrace"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Terarce</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={Bed} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Bed</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={Office}
                alt="office"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">office</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={OutdoorCafe}
                alt="outdoor"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={Bed2}
                alt="Mattress"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Mattress</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
          <Link
              to="/"
              className="text-gray-200 hover:text-white transition"
            >
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
              to="/Contact"
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>

          <button
            onClick={handleLoginButtonClick}
            className="text-gray-200 hover:text-white transition"
          >
            Login
          </button>

          <PopupWindow show={showLogin} onClose={handleClosePopup} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
