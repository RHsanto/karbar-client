import React from "react";

import logo from "../../images/logo.PNG";
// eslint-disable-next-line no-unused-vars
import { BiHomeSmile, BiLayer, BiLogoPaypal } from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashTemplate = () => {
  // const [dashTabs, setDashTabs] = useState("MainDash");

  // const handleDashTab = tabs => {
  //   setDashTabs(tabs);
  // };
  return (
    <div className=" m-5">
      <div className="flex items-center border-b-2  pb-5">
        <img className="w-[50px] " src={logo} alt="" /> <h3>Karbar </h3>
      </div>
      {/* nav list */}
      <div className="adminDash-nav mt-5 ">
        <Link to="/adminDash" className="flex items-center gap-2">
          <li className="w-full mb-3">
            <BiHomeSmile className="text-2xl" /> <span className="text-[16px]">Dashboard</span>
          </li>
        </Link>
        <Link to="/adminDash/orderList" className="flex items-center gap-2">
          <li className="w-full mb-3">
            <LuClipboardList className="text-2xl" />{" "}
            <span className="text-[16px]"> Order List</span>
          </li>
        </Link>
        {/* <Link to="/adminDash/paymentList" className="flex items-center gap-2">
          <li className="w-full mb-3">
            <BiLogoPaypal className="text-2xl" />
            <span className="text-[16px]"> Payment</span>
          </li>
        </Link> */}
        <Link to="/adminDash/productList" className="flex items-center gap-2">
          <li className="w-full mb-3">
            <BiLayer className="text-2xl" /> <span className="text-[16px]">Products</span>
          </li>
        </Link>
        <Link to="/adminDash/customer" className="flex items-center gap-2">
          <li className="w-full mb-3">
            <FaUsers className="text-2xl" /> <span className="text-[16px]"> Customer</span>
          </li>
        </Link>
      </div>
    </div>
  );
};

export default DashTemplate;
