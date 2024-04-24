// Shop.js
import React, { useState, useEffect } from "react";
import SortingOptions from "./SortingOption";
import DisplayOptions from "./DisplayOption";
import { fetchData } from "../../utils/Shop";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";
import { ScrollTop } from "../../utils/ScrollTop";
import ServerError from "../Error/ServerError";

const Shop = () => {
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [sortingOption, setSortingOption] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const listData = await fetchData();
        setProducts(listData);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      {products && products.length > 0 ? (
        <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
          <ScrollTop />
          <Sidebar
            setCategoriesFilter={setCategoriesFilter}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
          <div className="col-span-3">
            <div className="flex items-center mb-4">
              <SortingOptions setSortingOption={setSortingOption} />
              {/* <DisplayOptions /> */}
            </div>
            <ProductList
              categoriesFilter={categoriesFilter}
              sortingOption={sortingOption}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      ) : (
    <ServerError/>
      )}
    </>
  );
};

export default Shop;
