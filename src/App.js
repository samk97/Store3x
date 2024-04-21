import React from "react";
import { Routes, Route } from "react-router-dom";
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
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user_type = useSelector((state) => state.auth.user_type);

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

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard2 />} />
        <Route path="product_handle" element={<ProductHandle />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="seller-profile" element={<SellerProfile />} />
      </Route>

      {/* Catch-all route for handling invalid URLs */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
