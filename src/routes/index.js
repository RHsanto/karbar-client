import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Mans from "../components/Home/Ternding/Mans";
import Women from "../components/Home/Ternding/Women";
import Kids from "../components/Home/Ternding/Kids";
import Beauty from "../components/Home/Ternding/Jewels";
import Sport from "../components/Home/Ternding/Sport";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Cart from "../components/Home/Cart/Cart";
import Contact from "../components/Home/Contact";
import Checkout from "../components/Home/Cart/Checkout";

import Login from "../components/Home/Authentication/Login";
import SignUp from "../components/Home/Authentication/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Failed from "../components/Home/Cart/Payments/Failed";
import Success from "../components/Home/Cart/Payments/Success";
import UserDash from "../components/Home/Cart/UserDashboard/UserDash";
import DashTemplate from "../components/AdminDashboard/DashTemplate";

const Index = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<Mans />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout-cancel" element={<Failed />} />
        <Route path="/checkout-success" element={<Success />} />
        <Route path="/userDash" element={<UserDash />} />
        <Route path="/adminDash" element={<DashTemplate />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Index;
