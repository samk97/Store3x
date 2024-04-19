import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import { fetchData } from "../../utils/Shop";
import { addToCartHandler } from "../../utils/Cart";
import { addToWishlistHandler } from "../../utils/Wishlist";
import Alert from "../UI/Alert";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const user = useSelector((state) => state.auth.user);

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

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCartHandler(user,productId);
      setShowAlert(true);

      if (response.success) {
        setAlertMsg(response.message);
        setAlertMsgType("success");
       
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
      const response = await addToWishlistHandler(user,productId);
      setShowAlert(true);

      if (response.success) {
        setAlertMsg(response.message);
        setAlertMsgType("success");
      } else {
        setAlertMsg(response.message);
        setAlertMsgType("NA");
      }
    } catch (error) {
      setAlertMsg(error.message);
      setAlertMsgType("fail");
    }
  };

  // Calculate indexes of the items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType={alertMsgType}
          message={alertMsg}
        />
      )}
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        
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
    </>
  );
};

export default ProductList;
