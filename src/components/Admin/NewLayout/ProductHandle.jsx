import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { faTrashAlt, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminHeader";

const ProductHandle = () => {
  let user = "seller123";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://localhost:4003/Seller/products/${user}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (productId) => {
    // Redirect or navigate to edit page with productId
    console.log("Edit product:", productId);
  };

  const handleDelete = async (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://localhost:4003/Products/${productId}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            // Delete successful, update the state or fetch data again
            fetchData();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log("Product deleted successfully.");
          } else {
            console.error("Failed to delete product.");
            Swal.fire({
              title: "Failed to delete!",
              text: "Please try again later.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the product.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <AdminHeader />

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/5 mb-4 md:mb-0">
          <Sidebar />
        </div>

        <div className="w-full md:w-4/5 px-4">
          <div className="outer-table-container pt-24">
            <div className="add-btn-wrapper flex justify-end py-3">
              <Link to="/add-product">
                <button
                  type="button"
                  className="bg-red-700 px-5 py-1 rounded text-white font-bold"
                >
                  Add +
                </button>
              </Link>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs  text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount(%)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Review
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  products.map((product) => (
                    <tr
                      key={product.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{product.product_id}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {product.name}
                      </td>
                      <td className="px-6 py-4">{product.color}</td>
                      <td className="px-6 py-4">{product.discount_percent}</td>
                      <td className="px-6 py-4">{product.category_id}</td>
                      <td className="px-6 py-4">{product.available_units}</td>
                      <td className="px-6 py-4">{product.rating}</td>
                      <td className="px-6 py-4">{product.review_count}</td>
                      <td className="px-6 py-4">₹{product.price}</td>
                      <td className="px-6 py-4">
                        <div>
                          <button
                            onClick={() => handleDelete(product.product_id)}
                          >
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              style={{ padding: "10px" }}
                            />
                          </button>
                          <button
                            onClick={() => handleEdit(product.product_id)}
                          >
                            <FontAwesomeIcon
                              icon={faEdit}
                              style={{ padding: "10px" }}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHandle;
