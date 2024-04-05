import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Product from "./components/Product/Product";
import Wishlist from "./components/Wishlist/Wishlist";
import Layout from "./components/Layouts/Layout";
import HomeLayout from "./components/Home/Home";
import ShopLayout from "./components/Layouts/ShopLayout";
import Dashboard from "./components/Admin/Dashboard";
import AdSidebar from './components/Admin/Sidebar';
import ProductHandle from "./components/Admin/ProductHandle";
import AddProduct from "./components/Admin/AddProduct";
import SellerProfile from "./components/Admin/SellerProfile";
import Address from "./components/Order/Address";
function App() {
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
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="ad-sidebar" element={<AdSidebar />} />
      <Route path="product_handle" element={<ProductHandle />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="seller-profile" element={<SellerProfile />} />
    </Routes>
  );
}

export default App;
