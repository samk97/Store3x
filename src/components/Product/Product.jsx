import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ProductCard from "./ProductCard";
import { addToCartHandler } from "../../utils/Cart";
import { addToWishlistHandler } from "../../utils/Wishlist";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/Product";
import { fetchCategoriesById } from "../../utils/Category";
import Alert from "../UI/Alert";
import { fetchData } from "../../utils/Shop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setcartSize } from "../../redux/slices/cartSlice";
import { ScrollTop } from "../../utils/ScrollTop";
import { setwishSize } from "../../redux/slices/wishSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [price, setPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertMsgType, setAlertMsgType] = useState("");
  const cart_size = useSelector((state) => state.cart.cart_size);
  const wish_size = useSelector((state) => state.wish.wish_size);
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        setProduct(response);
        console.log(product);

        const categoryData = await fetchCategoriesById(response.category_id);
        setCategoryName(categoryData.category_name);
        setCategoryId(response.category_id);

        const discount = (response.discount_percent / 100) * response.price;
        const discountedPrice = response.price - discount;
        setPrice(response.price);
        setDiscountedPrice(discountedPrice);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

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
  const handleAddToCart2 = () => {
    handleAddToCart(product.product_id);
  };
  const handleAddToWishlist2 = () => {
    handleAddToWishlist(product.product_id);
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

  return (
    <>
      <ScrollTop dep={productId} />
      <div className="container grid  gap-6 md:grid-row-2 sm:grid-cols-2">
        <div>
          <img src={product.image_url} alt="product" className="w-full" />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <div className="flex gap-1 text-sm text-white bg-green-500 px-1">
                <span>
                  {product.rating} <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              {product.in_stock > 0 ? (
                <span className="text-green-600">
                  In Stock ({product.in_stock})
                </span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>

            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{categoryName}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-red-700 font-semibold">
              ₹{discountedPrice ? discountedPrice.toFixed(2) : ""}
            </p>
            <p className="text-base text-gray-400 line-through">
              ₹{price ? price.toFixed(2) : ""}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <button
              onClick={handleAddToCart2}
              className={`bg-red-700 border border-red-700 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-red-700 transition ${
                product.in_stock < 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-transparent hover:text-red-700 transition font-medium"
              }`}
              disabled={product.in_stock < 1}
            >
              Add to Cart
            </button>

            <button
              onClick={handleAddToWishlist2}
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-red-700 transition"
            >
              <FontAwesomeIcon icon={faHeart} /> Wishlist
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      {/* ./product-detail */}
      {/* description */}
      <div className="container pt-10 pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-bold text-left">
          Product details
        </h3>
        <div className="w-full pt-6">
          <div className="text-gray-600">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              necessitatibus deleniti natus dolore cum maiores suscipit optio
              itaque voluptatibus veritatis tempora iste facilis non aut
              sapiente dolor quisquam, ex ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              quae accusantium voluptatem blanditiis sapiente voluptatum. Autem
              ab, dolorum assumenda earum veniam eius illo fugiat possimus illum
              dolor totam, ducimus excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quia modi ut expedita! Iure molestiae labore cumque nobis quasi
              fuga, quibusdam rem? Temporibus consectetur corrupti rerum
              veritatis numquam labore amet.
            </p>
          </div>
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Color
                </th>
                <th className="py-2 px-4 border border-gray-300 ">
                  Blank, Brown, Red
                </th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Material
                </th>
                <th className="py-2 px-4 border border-gray-300 ">Latex</th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Weight
                </th>
                <th className="py-2 px-4 border border-gray-300 ">55kg</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ./description */}
      {/* related product */}
      <div className="container pb-16 ">
        <h2 className="text-2xl font-bold text-gray-800 uppercase mb-6 text-left">
          Related products
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {products
            .filter(
              (product) =>
                product.category_id === categoryId &&
                product.product_id != productId
            ) // Filter products by category_id
            .slice(0, 4) // Slice the filtered products to show only the first 4
            .map((product) => (
              <div key={product.productId}>
                {/* Add conditional check */}
                {product && (
                  <ProductCard
                    key={product.productId} // Assuming productId is unique
                    title={product.name}
                    price={product.price}
                    addToCartHandler={() => handleAddToCart(product.product_id)}
                    addToWishlistHandler={() =>
                      handleAddToWishlist(product.product_id)
                    }
                    bgImage={product.image_url}
                    rating={product.rating}
                    discount_percent={product.discount_percent}
                    productId={product.product_id}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType={alertMsgType}
          message={alertMsg}
        />
      )}
      {/* ./related product */}
    </>
  );
};

export default Product;
