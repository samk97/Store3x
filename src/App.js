import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout";
import Product from "./components/Product/Product";
import Wishlist from "./components/Wishlist";
import Layout from "./components/Layouts/Layout";
import HomeLayout from "./components/Layouts/HomeLayout";
import ShopLayout from "./components/Layouts/ShopLayout";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeLayout />} />
        <Route path="shop" element={<ShopLayout/>}>
          <Route index element={<Shop/>}/>
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
