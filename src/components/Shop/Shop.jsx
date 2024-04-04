// Shop.js
import React, { useState } from "react";
import SortingOptions from "./SortingOption";
import DisplayOptions from "./DisplayOption";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

const Shop = () => {
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [sortingOption, setSortingOption] = useState("");

  return (
    <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
      <Sidebar setCategoriesFilter={setCategoriesFilter} />
      <div className="col-span-3">
        <div className="flex items-center mb-4">
          <SortingOptions setSortingOption={setSortingOption} />
          <DisplayOptions />
        </div>
        <ProductList categoriesFilter={categoriesFilter} sortingOption={sortingOption} />
      </div>
    </div>
  );
};

export default Shop;
