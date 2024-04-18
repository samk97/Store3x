import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Alert from "../UI/Alert";
import { useSelector } from "react-redux";

import {
  getUserWishListItems,
  fetchWishlistProductData,
  handleDeleteItem,
} from "../../utils/Wishlist";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertMsgType, setAlertMsgType] = useState("");
  let user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getUserWishListItems(user);
        const productData = await fetchWishlistProductData(items);
        const wishlistWithProductData = items.map((item, index) => ({
          ...item,
          productData: productData[index],
        }));
        setWishlistItems(wishlistWithProductData);
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const success = await handleDeleteItem(user,productId);
      if (success) {
        // Remove the deleted item from wishlistItems state
        setWishlistItems((prevItems) =>
          prevItems.filter((item) => item.product_id !== productId)
        );
        setShowAlert(true);
        setAlertMsg("Item deleted from wishlist successfully.");
        setAlertMsgType("success");
      } else {
        setShowAlert(true);
        setAlertMsg("Failed to delete item from wishlist.");
        setAlertMsgType("error");
      }
    } catch (error) {
      console.error("Error deleting item from wishlist:", error);
      setShowAlert(true);
      setAlertMsg("An error occurred while deleting item from wishlist.");
      setAlertMsgType("error");
    }
  };

  return (
    <>
      <div className="col-span-9 space-y-4 p-10">
        {wishlistItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
          >
            <div className="w-28">
              <img
                src={item.productData.image_url}
                alt={item.productData.name}
                className="w-full"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                {item.productData.name}
              </h2>
              <p className="text-gray-500 text-sm">
                Availability:{" "}
                <span
                  className={`text-${
                    item.productData.availability ? "green" : "red"
                  }-600`}
                >
                  {item.productData.availability ? "In Stock" : "Out of Stock"}
                </span>
              </p>
            </div>
            <div className="text-red-700 text-lg font-semibold">
              ${item.productData.price}
            </div>
            <a
              href="#"
              className={`${
                item.productData.availability
                  ? "bg-red-700 hover:bg-transparent hover:text-red-700"
                  : "cursor-not-allowed bg-red-400"
              } px-6 py-2 text-center text-sm text-white border border-red-700 rounded transition uppercase font-roboto font-medium`}
            >
              {item.productData.availability ? "Add to Cart" : "Out of Stock"}
            </a>
            <div
              className="text-gray-600 cursor-pointer hover:text-red-700"
              onClick={() => handleDelete(item.product_id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        ))}
        {showAlert && (
          <Alert
            setShowAlert={setShowAlert}
            messageType={alertMsgType}
            message={alertMsg}
          />
        )}
      </div>
    </>
  );
};

export default Wishlist;
