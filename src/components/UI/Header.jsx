import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { logout } from "../../utils/Auth";
import {
  faSignOutAlt,
  faCog,
  faClipboardList,
  faStore,
  faHeart,
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "../../utils/Shop";
import { useSelector } from "react-redux";

const Header = () => {
  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const cartRef = useRef(null);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user_type = useSelector((state) => state.auth.user_type);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const listData = await fetchData();
        setProducts(listData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setShowResults(event.target.value !== "");
  };

  const handleCart = () => {
    setCartPopupOpen((prevState) => !prevState);
  };

  const handleClosePopup = () => {
    setShowResults(false);
  };

  const handleLogout = () => {
    logout();
  };

  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      event.target.id !== "search"
    ) {
      setShowResults(false);
    }

    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      event.target.id !== "cart"
    ) {
      setCartPopupOpen(false);
    }
  };

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-52" />
        </Link>

        <div className="w-full max-w-xl relative flex" ref={searchRef}>
          <span className="absolute left-4 top-3 text-lg text-gray-400 outline-none">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full border border-red-700 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
            placeholder="search"
          />
          <button className="bg-red-700 border border-red-700 text-white px-8 rounded-r-md hover:bg-transparent hover:text-red-700 transition hidden md:flex items-center justify-center">
            Search
          </button>

          {showResults && (
            <div className="absolute left-0 mt-12 z-50 w-full text-gray-400 bg-white border border-red-700 rounded-md p-4 max-h-96 overflow-y-scroll">
              {products
                .filter((product) =>
                  product.name.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((product) => (
                  <Link
                    to={`shop/product/${product.product_id}`}
                    key={product.product_id}
                    onClick={handleClosePopup}
                  >
                    <div className="flex mb-4 border-b-2 p-1">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-16 h-16 inline-block mr-2"
                      />
                      <div className="inline-block">
                        <p className="font-semibold">{product.name}</p>
                        <p>{product.description}</p>
                        <p className="text-red-700">{product.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              {products.filter((product) =>
                product.name.toLowerCase().includes(searchText.toLowerCase())
              ).length === 0 && <p>No products found</p>}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="wishlist">
            <div className="relative text-center text-gray-700 hover:text-red-700 transition">
              <div className="text-2xl">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="text-xs leading-3">Wishlist</div>
            </div>
          </Link>

          <div
            className="relative text-center text-gray-700 hover:text-red-700 transition"
            onClick={handleCart}
            ref={cartRef}
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="text-xs leading-3">Cart</div>
            {cartPopupOpen && <Cart />}
          </div>

          <div
            className={`relative text-center text-gray-700  hover:text-red-700  transition group ${
              isLoggedIn ? "" : "pointer-events-none"
            }`}
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="text-xs leading-3">Account</div>

            <div
              className="absolute right-0 bg-white px-2 rounded-md  border-t-2  border-gray-800 z-50 shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"
              onClick={handleClosePopup}
            >
              <Link
                to="/profile"
                className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6  text-sm">Profile</span>
              </Link>
              <Link
                to="/order"
                className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6  text-sm">Orders</span>
              </Link>
              {user_type === 2 && (
                <Link
                  to="/dashboard"
                  className="flex items-center px-6 py-3 text-gray-700 hover:text-red-700 transition"
                >
                  <FontAwesomeIcon
                    icon={faStore}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-sm">Seller Account</span>
                </Link>
              )}

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
      </div>
    </header>
  );
};

export default Header;
