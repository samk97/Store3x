import React, { useEffect, useState } from "react";
import CardDataStats from "./CardDataStats";
import ChartOne from "./Charts/ChartOne";
import ChartTwo from "./Charts/ChartTwo";
import ChatCard from "./Chat/ChatCard";
import TableOne from "./Tables/TableOne";
import { fetchUser } from "../../utils/Auth";
import { getAllProductsForSeller } from "../../utils/Seller";

const Dashboard = () => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const listData = await getAllProductsForSeller(fetchUser().email);
        setProducts(listData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(()=>{
    console.log(products);
  })

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Total Orders"
          total="$3.456K"
          rate="0.43%"
          levelUp
        ></CardDataStats>
        <CardDataStats
          title="Total Profit"
          total="$45,2K"
          rate="4.35%"
          levelUp
        ></CardDataStats>
        <CardDataStats
          title="Total Product"
          total={products.length}
          rate="2.59%"
          levelUp
        ></CardDataStats>
        <CardDataStats
          title="Total Users"
          total="3.456"
          rate="0.95%"
          levelDown
        ></CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        {/* <ChartThree /> */}

        {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard /> */}
      </div>
    </>
  );
};

export default Dashboard;
