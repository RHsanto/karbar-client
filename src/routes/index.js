/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Mans from "../components/Home/Ternding/Mans";
import Women from "../components/Home/Ternding/Women";
import Kids from "../components/Home/Ternding/Kids";
import Beauty from "../components/Home/Ternding/Jewels";
import Sport from "../components/Home/Ternding/Sport";
import Cart from "../components/Home/Cart/Cart";
import Contact from "../components/Home/Contact";
import Checkout from "../components/Home/Cart/Checkout";
import Login from "../components/Home/Authentication/Login";
import SignUp from "../components/Home/Authentication/SignUp";
import PrivateRoute from "../ProtectRoute/PrivateRoute";
import Failed from "../components/Home/Cart/Payments/Failed";
import Success from "../components/Home/Cart/Payments/Success";
import UserDash from "../components/Home/Cart/UserDashboard/UserDash";
import PaymentLists from "../components/AdminDashboard/PaymentLists";
import MainDashboard from "../components/AdminDashboard/MainDashboard";
import AllOrders from "../components/AdminDashboard/Orders/AllOrders";
import AllProducts from "../components/AdminDashboard/Product/AllProducts";
import Customer from "../components/AdminDashboard/Customer/Customer";
import OrderDetails from "../components/AdminDashboard/Orders/OrderDetails";
import AddProduct from "../components/AdminDashboard/Product/AddProduct";
import AdminRoute from "../ProtectRoute/AdminRoute";
import ProtectMsg from "../ProtectRoute/ProtectMsg";
import UserProfile from "../components/Home/Cart/UserDashboard/UserProfile";
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
        <Route
          path="/user-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route path="/security-alert" element={<ProtectMsg />} />

        <Route
          path="/adminDash"
          element={
            <AdminRoute>
              <MainDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/adminDash/orderList"
          element={
            <AdminRoute>
              <AllOrders />
            </AdminRoute>
          }
        />
        <Route
          path="/adminDash/productList"
          element={
            <AdminRoute>
              <AllProducts />
            </AdminRoute>
          }
        />
        <Route
          path="/adminDash/addProduct"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        {/* <Route path="/adminDash/paymentList" element={
        <PaymentLists />} /> */}
        <Route
          path="/adminDash/customer"
          element={
            <AdminRoute>
              <Customer />
            </AdminRoute>
          }
        />
        <Route
          path="/order/:id"
          element={
            <AdminRoute>
              <OrderDetails />
            </AdminRoute>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Index;
