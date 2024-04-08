// Sidebar.js
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../utils/Category";
import { fetchData } from "../../utils/Shop";

const Sidebar = ({ setCategoriesFilter, setMinPrice, setMaxPrice }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await fetchData();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductsData();
  }, []);

  const getCategoryItemCount = (categoryId) => {
    return products.filter((product) => product.category_id === categoryId)
      .length;
  };

  const handleCategoryChange = (categoryId, checked) => {
    if (categoryId === 0) {
      if (checked) {
        setCategoriesFilter([]);
      }
    } else {
      if (checked) {
        setCategoriesFilter((prevCategories) => [
          ...prevCategories,
          categoryId,
        ]);
      } else {
        setCategoriesFilter((prevCategories) =>
          prevCategories.filter((id) => id !== categoryId)
        );
      }
    }
  };

  const handlePriceRangeChange = (min, max, checked) => {
    let updatedRanges;

    if (!checked) {
      updatedRanges = selectedPriceRanges.filter(
        (range) => !(range.min === min && range.max === max)
      );
      setSelectedPriceRanges(updatedRanges);
    } else {
      updatedRanges = [...selectedPriceRanges, { min, max }];
      setSelectedPriceRanges(updatedRanges);
    }

    const minPrice =
      updatedRanges.length > 0
        ? Math.min(...updatedRanges.map((range) => range.min))
        : 0;
    const maxPrice =
      updatedRanges.length > 0
        ? Math.max(...updatedRanges.map((range) => range.max))
        : Infinity;

    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

  return (
    <>
      <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
        <div className="divide-y divide-gray-200 space-y-5">
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Categories
            </h3>
            <div className="space-y-2">
              <div key={0} className="flex items-center">
                <input
                  type="checkbox"
                  name={`cat-${0}`}
                  id={`cat-${0}`}
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) => handleCategoryChange(0, e.target.checked)}
                />
                <label
                  htmlFor={`cat-${0}`}
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  All
                </label>
                <div className="ml-auto text-gray-600 text-sm">
                  ({products.length})
                </div>
              </div>
              {categories.map((category) => (
                <div key={category.category_id} className="flex items-center">
                  <input
                    type="checkbox"
                    name={`cat-${category.category_id}`}
                    id={`cat-${category.category_id}`}
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    onChange={(e) =>
                      handleCategoryChange(
                        category.category_id,
                        e.target.checked
                      )
                    }
                  />
                  <label
                    htmlFor={`cat-${category.category_id}`}
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    {category.category_name}
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">
                    ({getCategoryItemCount(category.category_id)})
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Price
            </h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) =>
                    handlePriceRangeChange(0, 500, e.target.checked)
                  }
                />
                <label className="text-gray-600 ml-3 cursor-pointer">
                  0 - 500
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) =>
                    handlePriceRangeChange(500, 1000, e.target.checked)
                  }
                />
                <label className="text-gray-600 ml-3 cursor-pointer">
                  500 - 1000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) =>
                    handlePriceRangeChange(1000, 2000, e.target.checked)
                  }
                />
                <label className="text-gray-600 ml-3 cursor-pointer">
                  1000 - 2000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) =>
                    handlePriceRangeChange(2000, 4000, e.target.checked)
                  }
                />
                <label className="text-gray-600 ml-3 cursor-pointer">
                  2000 - 4000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  onChange={(e) =>
                    handlePriceRangeChange(4000, 8000, e.target.checked)
                  }
                />
                <label className="text-gray-600 ml-3 cursor-pointer">
                  4000 - 8000
                </label>
              </div>
              {/* Add more ranges as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
