import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Mans from "../components/Home/Trending/Mans";
import Women from "../components/Home/Trending/Women";
import Kids from "../components/Home/Trending/Kids";
import Beauty from "../components/Home/Trending/Jewels";
import Sport from "../components/Home/Trending/Sport";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Cart from "../components/Home/Cart/Cart";
import Checkout from "../components/Home/Cart/Checkout";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<Mans />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
