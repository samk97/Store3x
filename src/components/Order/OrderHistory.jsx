import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchUser } from "../../utils/Auth";
import { getOrderItems } from "../../utils/Order";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orderIds, setOrderIds] = useState([]);
  const [products, setProducts] = useState([]);
  const user = fetchUser().email;
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch order ids
        const orderIdsResponse = await axios.get(
          `https://localhost:4002/buyer/${user}`
        );
        setOrderIds(orderIdsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchAndHandleOrderItems = async (orderId) => {
    try {
      const orderItems = await getOrderItems(orderId);
      console.log("Order Items:", orderItems);
      setProducts(orderItems);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const toggleCardAndFetchOrderItems = async (index, orderId) => {
    // First toggle the card
    toggleCard(index);

    try {
      // Fetch and handle order items
      const productDetailsArray = await fetchAndHandleOrderItems(orderId);
      console.log("Product Details Array:", productDetailsArray);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleCard = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className="w-full pt-5 flex justify-center text-2xl font-bold">
        <h1>Your Order History</h1>
      </div>
      <section className="py-12 relative">
        {/*order start*/}
        {orderIds.map((orderId, index) => (
          <div
            key={index}
            className="w-full max-w-7xl px-4 py-2 md:px-5 lg-6 mx-auto"
          >
            <div className="main-box border border-gray-200 shadow-xl rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
              {/* Render order details here */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-gray-200">
                <div className="data">
                  <p className="font-semibold text-base leading-7 text-black">
                    Order Id:{" "}
                    <span className="text-indigo-600 font-medium">
                      #{orderId.order_id}
                    </span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-black mt-4">
                    Order Payment :{" "}
                    <span className="text-gray-400 font-medium">
                      {" "}
                      18th march 2021
                    </span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-black mt-4">
                    Total Price :{" "}
                    <span className="text-gray-400 font-medium">
                      {" "}
                      ₹{orderId.total_price}
                    </span>
                  </p>
                </div>
                <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-red-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-700 hover:shadow-red-400">
                  Cancel Order
                </button>
                {/* <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-gray-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-700 hover:shadow-red-400">
                  Track Your Order
                </button> */}
              </div>
              <div className="w-full pb-2 flex flex-col lg:flex-row items-center justify-center ">
                {/* Expand/Collapse Icon */}
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    toggleCardAndFetchOrderItems(index, orderId.order_id)
                  }
                >
                  {openIndex === index ? (
                    <svg
                      className="h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {openIndex === index && (
                <div className="w-full border-t px-3 min-[400px]:px-6">
                  {/* this is card start */}

                  {products.map((product) => (
                    <Link
                      to={`/shop/product/${product.product_id}`}
                      className="flex flex-col lg:flex-row items-center py-4 border-b gap-6 w-full hover:bg-gray-100"
                    >
                      <div className="img-box max-lg:w-full">
                        <img
                          src={product.image_url}
                          alt="Diamond Watch image"
                          className="aspect-square w-full lg:max-w-[140px]"
                        />
                      </div>
                      <div className="flex flex-row items-center w-full ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                          <div className="flex items-center">
                            <div className="">
                              <h2 className="font-semibold text-xl leading-8 text-black mb-3 ">
                                {product.name}
                              </h2>
                              {/* <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                              Seller Id
                            </p> */}
                              <div className="flex items-center  ">
                                {/* <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                Size:{" "}
                                <span className="text-gray-500">Regular</span>
                              </p> */}
                                <p className="font-medium text-base leading-7 text-black ">
                                  Qty: <span className="text-gray-500">1</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-5">
                            <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                              <div className="flex gap-3 lg:block">
                                <p className="font-medium text-sm leading-7 text-black">
                                  price
                                </p>
                                <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                                  ₹{product.price}
                                </p>
                              </div>
                            </div>
                            <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                              <div className="flex gap-3 lg:block">
                                <p className="font-medium text-sm leading-7 text-black">
                                  Status
                                </p>
                                <p className="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600">
                                  Dispatched
                                </p>
                              </div>
                            </div>
                            <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                              <div className="flex gap-3 lg:block">
                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                  Expected Delivery Time
                                </p>
                                <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                  23rd March 2021
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {/*card end*/}
                </div>
              )}
            </div>
          </div>
        ))}
        {/*order end*/}
      </section>
    </>
  );
};

export default OrderHistory;
