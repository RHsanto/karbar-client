import React, { useState } from "react";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";
import { FaSignInAlt, FaUserAlt, FaUserCircle, FaWhmcs } from "react-icons/fa";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import useFirebase from "../../../../hooks/useFirebase";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json());

const UserProfile = () => {
  const { logOut, user } = useFirebase();
  const [userInfo, setUserInfo] = useState("UserInfo");

  // // here use useSwr methods
  const { data } = useSWR(`https://dokan-backend.onrender.com/user/${user.email}`, fetcher);
  // console.log(data);

  const handlePersonalInfo = () => {
    setUserInfo("UserInfo");
  };
  const handleUserEdit = () => {
    setUserInfo("EditProfile");
  };

  return (
    <section>
      <Navbar />
      <div className="bg-slate-200">
        <div className="container mx-auto lg:p-32">
          <div className="lg:grid grid-cols-4 gap-6">
            <div className=" col-span-1 lg:h-[350px] bg-white py-6">
              <div className="border-b-2 border-blue">
                {data?.imageLink ? (
                  <img
                    src={data?.imageLink}
                    alt=""
                    className=" mask mask-squircle w-28 h-28 mx-auto mb-5 "
                  />
                ) : (
                  <div>
                    <FaUserCircle className="text-8xl mx-auto p-2" />
                  </div>
                )}
              </div>
              <div className="pt-5  flex flex-col  ">
                <li
                  onClick={handlePersonalInfo}
                  className={`${
                    userInfo === "UserInfo"
                      ? "bg-blue text-white"
                      : "hover:bg-sky-300 hover:text-white"
                  } flex items-center gap-2  p-4`}
                >
                  <FaUserAlt /> Personal Info
                </li>
                <li
                  onClick={handleUserEdit}
                  className={`${
                    userInfo === "EditProfile"
                      ? "bg-blue text-white"
                      : "hover:bg-sky-300 hover:text-white"
                  } flex items-center gap-2  p-4`}
                >
                  <FaWhmcs /> Edit Profile
                </li>
                <li
                  onClick={logOut}
                  className=" flex items-center gap-2 hover:bg-sky-300 hover:text-white p-4 "
                >
                  <FaSignInAlt /> Log Out
                </li>
              </div>
            </div>
            <div className="col-span-3">
              {userInfo === "EditProfile" ? <EditProfile /> : <UserInfo />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default UserProfile;
