import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import { fetchData } from "../../utils/Shop";
import { addToCartHandler } from "../../utils/Cart";
import { addToWishlistHandler } from "../../utils/Wishlist";
import Alert from "../UI/Alert";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setcartSize } from "../../redux/slices/cartSlice";
import { setwishSize } from "../../redux/slices/wishSlice";

const ProductList = ({
  categoriesFilter,
  sortingOption,
  minPrice,
  maxPrice,
}) => {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertMsgType, setAlertMsgType] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage")
      ? parseInt(localStorage.getItem("currentPage"))
      : 1
  );
  const [itemsPerPage] = useState(9);
  const user = useSelector((state) => state.auth.user);
  const cart_size = useSelector((state) => state.cart.cart_size);
  const wish_size = useSelector((state) => state.wish.wish_size);
  const dispatch = useDispatch();

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
    const filterProducts = () => {
      const filtered = products.filter(
        (product) =>
          (categoriesFilter.length === 0 ||
            categoriesFilter.includes(product.category_id)) &&
          (minPrice === "" ||
            parseFloat(product.price) >= parseFloat(minPrice)) &&
          (maxPrice === "" || parseFloat(product.price) <= parseFloat(maxPrice))
      );
      setFilteredProducts(filtered);
    };
    filterProducts();
  }, [categoriesFilter, products, minPrice, maxPrice]);

  const sortProducts = (products, sortingOption) => {
    if (sortingOption === "price-low-to-high") {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (sortingOption === "price-high-to-low") {
      return products.slice().sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    setCurrentPage(savedPage ? parseInt(savedPage) : 1);
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCartHandler(user, productId);
      setShowAlert(true);

      if (response.success) {
        setAlertMsg(response.message);
        setAlertMsgType("success");
        dispatch(setcartSize({ cart_size: cart_size + 1 }));
      } else {
        setAlertMsg(response.message);
        setAlertMsgType("NA");
      }
    } catch (error) {
      setAlertMsg(error.message);
      setAlertMsgType("fail");
    }
  };

  const handleAddToWishlist = async (productId) => {
    try {
      const response = await addToWishlistHandler(user, productId);
      setShowAlert(true);

      if (response.success) {
        setAlertMsg(response.message);
        setAlertMsgType("success");
        dispatch(setwishSize({ wish_size: wish_size + 1 }));
      } else {
        setAlertMsg(response.message);
        setAlertMsgType("NA");
      }
    } catch (error) {
      setAlertMsg(error.message);
      setAlertMsgType("fail");
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container pb-16">
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType={alertMsgType}
          message={alertMsg}
        />
      )}
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {sortProducts(currentItems, sortingOption).map((product) => (
          <ProductCard
            key={product.product_id}
            productId={product.product_id}
            title={product.name}
            price={product.price}
            bgImage={product.image_url}
            rating={product.rating}
            discount_percent={product.discount_percent}
            addToCartHandler={() => handleAddToCart(product.product_id)}
            addToWishlistHandler={() => handleAddToWishlist(product.product_id)}
          />
        ))}
      </div>

      <div className="pt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default ProductList;
