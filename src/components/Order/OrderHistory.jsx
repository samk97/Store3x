import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchUser } from "../../utils/Auth";

const OrderHistory = () => {
  const [orderIds, setOrderIds] = useState([]);
  const [buy, setBuy] = useState([]);
  const [products, setProducts] = useState([]);
  const user = fetchUser().email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch order ids
        const orderIdsResponse = await axios.get(
          `https://localhost:4002/buyer/${user}`
        );
        setOrderIds(orderIdsResponse.data);

        // Fetch buy data
        const buyData = await Promise.all(
          orderIdsResponse.data.map(async (orderItem) => {
            const response = await axios.get(
              `https://localhost:4002/Buy/${orderItem.order_id}`
            );
            return response.data;
          })
        );
        setBuy(buyData);

        // Fetch products
        const productsData = await Promise.all(
          buyData.map(async (orderItemArray) => {
            const productsInOrder = await Promise.all(
              orderItemArray.map(async (orderItem) => {
                const response = await axios.get(
                  `https://localhost:4003/Products/${orderItem.product_id}`
                );
                return response.data;
              })
            );
            return productsInOrder;
          })
        );
        setProducts(productsData);

        console.log("All data fetched successfully.");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("ids", orderIds);
  console.log("product", products);
  console.log("buy", buy);
  return (
    <section className="py-24 relative">
      {/*order start*/}
      {orderIds.map((orderId, index) => (
        <div key={index} className="w-full max-w-7xl py-1 px-4 md:px-5 lg-6 mx-auto">
          <div className="main-box border border-gray-400 shadow-md rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            {/* Render order details here */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
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
              </div>
              <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-red-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-700 hover:shadow-red-400">
                Track Your Order
              </button>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              {/* this is card start */}
              {products[index] &&
                products[index].map((product, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col lg:flex-row items-center py-6 gap-6 w-full"
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
                            <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                              {product.seller_id}
                            </p>
                            <div className="flex items-center  ">
                              <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                Size:{" "}
                                <span className="text-gray-500">Regular</span>
                              </p>
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
                  </div>
                ))}
              {/*card end*/}
            </div>
            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
              <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                <button className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                  <svg
                    className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  Cancel Order
                </button>
                <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                  Paid using Credit Card{" "}
                  <span className="text-gray-500">ending with 8822</span>
                </p>
              </div>
              <p className="font-semibold text-lg text-black py-6">
                Total Price:{" "}
                <span className="text-indigo-600"> ₹{orderId.total_price}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
      {/*order end*/}
    </section>
  );
};

export default OrderHistory;
