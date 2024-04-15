import React from "react";

const SellerProfile = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
        <img
          className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-red-500 dark:ring-red-700"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUbd_IE84Z_IxxjEY8biVPqsd1xrZIxckTDfgb2asuEbaoIRaYaqhjeiWsgAx5ZGwUjw&usqp=CAU"
          alt="Bordered avatar"
        />
        <div className="flex flex-col space-y-5 sm:ml-8">
          <button
            type="button"
            className="py-3.5 px-7 text-base font-medium text-red-100 focus:outline-none bg-red-700 rounded-lg border border-red-200 hover:bg-red-900 focus:z-10 focus:ring-4 focus:ring-red-200 "
          >
            Change picture
          </button>
          <button
            type="button"
            className="py-3.5 px-7 text-base font-medium text-red-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-red-200 "
          >
            Delete picture
          </button>
        </div>
      </div>
      <div className="items-center mt-8 sm:mt-14 text-[#202142]">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="w-full">
            <label
              htmlFor="fname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="shop"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Shop Name
            </label>
            <input
              type="text"
              name="shop"
              id="shop"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              type="text"
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your bio here"
              required
            />
          </div>
        </div>

        <div className="flex justify-center gap-3 items-center">
          <button
            type="submit"
            className="inline-flex justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
