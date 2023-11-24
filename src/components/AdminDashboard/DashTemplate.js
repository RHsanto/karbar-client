import React, { useState } from "react";
import MainDashboard from "./MainDashboard";
import logo from "../../images/logo.PNG";
import { BiHomeSmile, BiLayer, BiLogoPaypal, BiLogOutCircle } from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import { FaUsers, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import adminImg from "../../images/pro.png";
import useFirebase from "../../hooks/useFirebase";
import AllProducts from "./AllProducts";
import AllOrders from "./AllOrders";
import PaymentLists from "./PaymentLists";
import Customer from "./Customer";

const DashTemplate = () => {
  const { user, logOut } = useFirebase();
  const [dashTabs, setDashTabs] = useState("MainDash");

  const handleDashTab = tabs => {
    setDashTabs(tabs);
  };
  return (
    <div className="lg:grid grid-cols-6 gap-5 m-5">
      <div className="cols-span-1 m-5">
        <div className="flex items-center border-b-2  pb-5">
          <img className="w-[50px] " src={logo} alt="" /> <h3>Karbar </h3>
        </div>
        {/* nav list */}
        <div className="adminDash-nav mt-5 flex flex-col gap-3 w-full">
          <li
            className={`${dashTabs === "MainDash" ? "active-nav" : ""}`}
            onClick={() => handleDashTab("MainDash")}
          >
            <BiHomeSmile className="text-2xl" /> Dashboard
          </li>
          <li
            className={`${dashTabs === "Order" ? "active-nav" : ""}`}
            onClick={() => handleDashTab("Order")}
          >
            <LuClipboardList className="text-2xl" />
            Order List
          </li>
          <li
            className={`${dashTabs === "Payment" ? "active-nav" : ""}`}
            onClick={() => handleDashTab("Payment")}
          >
            <BiLogoPaypal className="text-2xl" />
            Payment
          </li>
          <li
            className={`${dashTabs === "Products" ? "active-nav" : ""}`}
            onClick={() => handleDashTab("Products")}
          >
            <BiLayer className="text-2xl" />
            Products
          </li>
          <li
            className={`${dashTabs === "Customer" ? "active-nav" : ""}`}
            onClick={() => handleDashTab("Customer")}
          >
            <FaUsers className="text-2xl" />
            Customer
          </li>
        </div>
      </div>
      <div className="bg-slate-100 col-span-5 rounded-lg ">
        {/*  Dashboard Header */}
        <div className="m-10 py-3 px-10 rounded flex justify-between  bg-white">
          <div className="flex items-center gap-2">
            {" "}
            <BiHomeSmile className="text-2xl" /> Home
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={adminImg} alt="img" />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-2 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72 gap-2"
              >
                <li>
                  <div className="border-b-2">
                    <div>
                      {" "}
                      <div className="avatar online">
                        <div className="w-10 rounded-full">
                          <img src={adminImg} alt="img" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5>{user?.displayName}</h5>
                      <p>Admin</p>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/#">
                    {" "}
                    <FaUserCheck className="text-2xl text-black" /> My Profile
                  </Link>
                </li>
                <div>
                  <div>
                    <button onClick={logOut} className="btn bg-red w-full text-white">
                      <BiLogOutCircle className="text-2xl" /> Sign out
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {dashTabs === "MainDash" ? <MainDashboard /> : ""}
        {dashTabs === "Order" ? <AllOrders /> : ""}
        {dashTabs === "Products" ? <AllProducts /> : ""}
        {dashTabs === "Payment" ? <PaymentLists /> : ""}
        {dashTabs === "Customer" ? <Customer /> : ""}
      </div>
    </div>
  );
};

export default DashTemplate;
