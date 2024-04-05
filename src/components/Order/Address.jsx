import React, { useState, useEffect } from "react";
import { random } from "../../utils/Seller";
import Swal from "sweetalert2";
import Checkout from "./Checkout";
import { fetchUser } from "../../utils/Auth";
const ADDRESS_APIURL = "https://localhost:4002/api/Address";
const Address = () => {
  let user = fetchUser().email;
  console.log(fetchUser());
  const [address, setAddress] = useState({
    user_id: user,
    address_id: random(),
    street1: "",
    street2: "",
    city: "",
    state: "",
    country: "",
    zipcode: 0,
    phone: "",
    is_default: 0,
    fname: "",
    lname: "",
  });

  const handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    value = e.target.id === "zipcode" ? Number(value) : value;
    setAddress({
      ...address,
      [e.target.name]: value,
    });
    console.log(address);
  };

  //previous Address

  async function fetchCategoryData() {
    try {
      const response = await fetch(ADDRESS_APIURL);
      if (!response.ok) {
        throw new Error("Failed to fetch category data");
      }
      const data = await response.json();
      setGetAddress(data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  }
  const [getAddress, setGetAddress] = useState([]);
  useEffect(() => {
    fetchCategoryData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(address));
    try {
      const response = await fetch(ADDRESS_APIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(address),
      });

      if (!response.ok) {
        handleClickUnsc();
        throw new Error("Failed to add product");
      }
      const responseData = await response.json();
      console.log("Address Added", responseData);
      handleClickAnm();
      fetchCategoryData();
      // Clear form after successful submission
      setAddress({
        user_id: user,
        address_id: random(),
        street1: "",
        street2: "",
        city: "",
        state: "",
        country: "",
        zipcode: 0,
        phone: "",
        is_default: 0,
        fname: "",
        lname: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const handleClickAnm = () => {
    Swal.fire({
      icon: "success",
      title: "Address Added !!",
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

  return (
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <div className="col-span-8 border border-gray-200 p-4 rounded">
        <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
        {/* Previous Saved Address Card */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded mb-6">
          <h4 className="text-gray-800 font-medium mb-2">
            Select Previous Address
          </h4>
          <select className="input-box">
            <option value="">Select an address</option>
            {getAddress.length > 0 &&
              getAddress.map((addr) => (
                <option key={addr.address_id} value={addr.address_id}>
                  {addr.fname + " " + addr.lname},{addr.street1}, {addr.city},{" "}
                  {addr.state}, {addr.country}, {addr.zipcode}
                </option>
              ))}
          </select>
        </div>
        {/* Checkout Form */}
        <h3 className="text-gray-800 font-medium text-center mb-5 text-3xl">
          Add Address
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="text-gray-600">
                First Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="fname"
                id="first-name"
                value={address.fname}
                onChange={handleChange}
                className="input-box"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-gray-600">
                Last Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="lname"
                id="last-name"
                value={address.lname}
                onChange={handleChange}
                className="input-box"
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="text-gray-600">
              Street Address
            </label>
            <input
              type="text"
              name="street1"
              id="address"
              value={address.street1}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="address2" className="text-gray-600">
              Apt, Suite, Bldg, etc. (optional)
            </label>
            <input
              type="text"
              name="street2"
              id="address2"
              value={address.street2}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-600">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={address.city}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="state" className="text-gray-600">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={address.state}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="country" className="text-gray-600">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={address.country}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="zipcode" className="text-gray-600">
              ZIP Code
            </label>
            <input
              type="number"
              name="zipcode"
              id="zipcode"
              value={address.zipcode}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={address.phone}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_default"
              id="is-default"
              checked={address.is_default}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="is-default" className="text-gray-600">
              Set as default address
            </label>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-red-700 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <Checkout />
    </div>
  );
};

export default Address;
