import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../utils/Category";
import { fetchData } from "../../utils/Shop";

const Sidebar = ({ setCategoriesFilter }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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
      // If categoryId is 0, list all categories
      if (checked) {
        // Set categoriesFilter to an empty array to list all categories
        setCategoriesFilter([]);
      }
    } else {
      // If categoryId is not 0
      if (checked) {
        setCategoriesFilter((prevCategories) => [...prevCategories, categoryId]);
      } else {
        setCategoriesFilter((prevCategories) =>
          prevCategories.filter((id) => id !== categoryId)
        );
      }
    }
  };
  
  return (
    <>
      {/* ./sidebar */}
      <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
        <div className="divide-y divide-gray-200 space-y-5">
          {/* Categories */}
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
                    onChange={(e) =>
                      handleCategoryChange(
                        0,
                        e.target.checked
                      )
                    }
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
          {/* Brand */}
          {/* <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Brands
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-1"
                  id="brand-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="brand-1"
                  className="text-gray-600 ml-3 cusror-pointer"
                >
                  Cooking Color
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-2"
                  id="brand-2"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="brand-2"
                  className="text-gray-600 ml-3 cusror-pointer"
                >
                  Magniflex
                </label>
                <div className="ml-auto text-gray-600 text-sm">(9)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-3"
                  id="brand-3"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="brand-3"
                  className="text-gray-600 ml-3 cusror-pointer"
                >
                  Ashley
                </label>
                <div className="ml-auto text-gray-600 text-sm">(21)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-4"
                  id="brand-4"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="brand-4"
                  className="text-gray-600 ml-3 cusror-pointer"
                >
                  M&amp;D
                </label>
                <div className="ml-auto text-gray-600 text-sm">(10)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-5"
                  id="brand-5"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="brand-5"
                  className="text-gray-600 ml-3 cusror-pointer"
                >
                  Olympic
                </label>
                <div className="ml-auto text-gray-600 text-sm">(10)</div>
              </div>
            </div>
          </div> */}
          {/* Price */}
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Price
            </h3>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                name="min"
                id="min"
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="min"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                name="max"
                id="max"
                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                placeholder="max"
              />
            </div>
          </div>
          {/* Size */}
          {/* <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              size
            </h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-sm"
                  className="hidden"
                />
                <label
                  htmlFor="size-sm"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div> */}
          {/* Color */}
          {/* <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input type="radio" name="color" id="red" className="hidden" />
                <label
                  htmlFor="red"
                  className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fc3d57" }}
                />
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="black"
                  className="hidden"
                />
                <label
                  htmlFor="black"
                  className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#000" }}
                />
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="white"
                  className="hidden"
                />
                <label
                  htmlFor="white"
                  className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fff" }}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
