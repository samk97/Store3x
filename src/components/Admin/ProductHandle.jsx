import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductHandle = () => {
  return (
    <>
      <Dashboard />
      <div className="outer-table-container flex items-center justify-center">
        <div className="flex flex-col items-center w-max overflow-x-auto justify-center">
          <div className="add-btn-wrapper flex justify-end w-full py-3">
            <Link to="/add-product">
              <button
                type="button"
                className="bg-red-700 px-5 py-1 rounded text-white font-bold"
              >
                Add +
              </button>
            </Link>
          </div>
          <table className="w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400    ">
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
                  category
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon icon={faTrashAlt} className="px-2" />

                  <FontAwesomeIcon icon={faEdit} />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon icon={faTrashAlt} className="px-2" />

                  <FontAwesomeIcon icon={faEdit} />
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon icon={faTrashAlt} className="px-2" />

                  <FontAwesomeIcon icon={faEdit} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductHandle;
