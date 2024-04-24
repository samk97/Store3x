import ProductCard from "../Product/ProductCard";
import { useState, useEffect } from "react";
import { fetchData } from "../../utils/Shop";
import { addToCartHandler } from "../../utils/Cart";
import { addToWishlistHandler } from "../../utils/Wishlist";
import Alert from "../UI/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setcartSize } from "../../redux/slices/cartSlice";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertMsgType, setAlertMsgType] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const cart_size = useSelector((state) => state.cart.cart_size);
  const dispatch = useDispatch();
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

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCartHandler(user, productId);
      setShowAlert(true);
      console.log(response);

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
      } else {
        setAlertMsg(response.message);
        setAlertMsgType("NA");
      }
    } catch (error) {
      setAlertMsg(error.message);
      setAlertMsgType("fail");
    }
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
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.productId} // Assuming productId is unique
            title={product.name}
            price={product.price}
            addToCartHandler={() => handleAddToCart(product.product_id)}
            addToWishlistHandler={() => handleAddToWishlist(product.product_id)}
            bgImage={product.image_url}
            rating={product.rating}
            discount_percent={product.discount_percent}
            productId={product.product_id}
          />
        ))}
      </div>
    </div>
  );
};
export default NewArrival;
