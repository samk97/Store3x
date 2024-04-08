import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";
import { random } from "../../../utils/Seller";
import Swal from "sweetalert2";

const productsApiUrl = process.env.REACT_APP_PRODUCTS_API_URL;

const AddProduct = () => {
  let sellerId = "seller123";
  const [formData, setFormData] = useState({
    product_id: random(),
    name: "",
    seller_id: sellerId,
    price: "",
    rating: 0,
    review_count: 0,
    category_id: 1,
    description: "",
    discount_percent: 0,
    available_units: 0,
    color: "",
    in_stock: 0,
    weight: "",
    carrier_id: 1,
    image_url: "",
  });

  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const response = await fetch("https://localhost:4003/category");
        if (!response.ok) {
          throw new Error("Failed to fetch category data");
        }
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
    fetchCategoryData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(category);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch(productsApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        handleClickUnsc();
        throw new Error("Failed to add product");
      }
      const responseData = await response.json();
      console.log("Product added:", responseData);
      handleClickAnm();

      // Clear form after successful submission
      setFormData({
        product_id: 0,
        name: "",
        seller_id: sellerId,
        price: "",
        rating: 0,
        review_count: 0,
        category_id: 0,
        description: "",
        discount_percent: 0,
        available_units: 999,
        color: "",
        in_stock: 0,
        weight: "",
        carrier_id: 1,
        image_url: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const handleClickAnm = () => {
    Swal.fire({
      icon: "success",
      title: "Product Added !!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleClickUnsc = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [otherCategory, setOtherCategory] = useState("");

  const handleChangeNew = (event) => {
    const { name, value } = event.target;
    if (name === "category_id") {
      if (value === "other") {
        setOtherCategory("");
      }
      setSelectedCategoryId(value);
    }
  };

  return (
    <>
      <AdminHeader />
      <Sidebar />
      <section className="bg-white dark:bg-gray-900 pt-20">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div className="flex justify-center items-center">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a New Product
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  In stock
                </label>
                <input
                  type="number"
                  name="in_stock"
                  id="in_stock"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image Url
                </label>
                <input
                  type="text"
                  name="image_url"
                  id="image_url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="www.simlify3x.com"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={handleChangeNew}
                >
                  {category.length > 0 &&
                    category.map((cat) => (
                      <option
                        key={cat.category_id}
                        value={cat.category_id}
                        selected={cat.category_id}
                      >
                        {cat.category_name}
                      </option>
                    ))}
                  <option>other</option>
                </select>
                {selectedCategoryId === "other" && (
                  <input
                    type="text"
                    value={otherCategory}
                    onChange={(e) => setOtherCategory(e.target.value)}
                    placeholder="Enter other category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                )}
              </div>

              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Item Weight (gram)
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={12}
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Discount(%)
                </label>
                <input
                  type="number"
                  name="discount_percent"
                  id="discount_percent"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={12}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="inline-flex justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center items-center px-5 py-2.5 ml-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
