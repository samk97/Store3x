import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Product from "./components/Product/Product";
import Wishlist from "./components/Wishlist/Wishlist";
import Layout from "./components/Layouts/Layout";
import HomeLayout from "./components/Home/Home";
import ShopLayout from "./components/Layouts/ShopLayout";
import ProductHandle from "./components/Admin/ProductHandle/ProductHandle";
import AddProduct from "./components/Admin/ProductHandle/AddProduct";
import Profile from "./components/Profile/Profile";
import Address from "./components/Order/Address";
import SellerProfile from "./components/Profile/Profile";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import OrderHistory from "./components/Order/OrderHistory";
import DashboardLayout from "./components/Admin/DashboardLayout";
import Dashboard2 from "./components/Admin/Dashboard";
import Error from "./components/Error/Error";
import { fetchUser } from "./utils/Auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = fetchUser();
    if (checkUser) {
      setUser(checkUser);
      console.log(user);
    } else {
      setUser(null);
    }
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeLayout />} />
        <Route path="shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path="product/:productId" element={<Product />} />
        </Route>
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="address" element={<Address />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order" element={<OrderHistory />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Error />} />

      {user && user.user_type === 2 ? (
        <>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard2 />} />
            <Route path="product_handle" element={<ProductHandle />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="seller-profile" element={<SellerProfile />} />
          </Route>
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
}

export default App;
