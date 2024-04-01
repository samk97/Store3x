import React from "react";

const SortingOptions = () => {
  return (
    <select
      name="sort"
      id="sort"
      className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-red-700 focus:border-red-700"
    >
      <option value="">Default sorting</option>
      <option value="price-low-to-high">Price low to high</option>
      <option value="price-high-to-low">Price high to low</option>
      <option value="latest">Latest product</option>
    </select>
  );
};

export default SortingOptions;
