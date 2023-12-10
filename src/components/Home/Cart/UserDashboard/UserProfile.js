import React, { useState } from "react";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";
import userImg from "../../../../images/pro.png";
import { FaSignInAlt, FaUserAlt, FaWhmcs } from "react-icons/fa";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import useFirebase from "../../../../hooks/useFirebase";
const UserProfile = () => {
  const { logOut, user } = useFirebase();
  const [userInfo, setUserInfo] = useState(<UserInfo />);

  // // here use useSwr methods
  // const { data} = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher)

  const handlePersonalInfo = () => {
    setUserInfo(<UserInfo />);
  };
  const handleUserEdit = () => {
    setUserInfo(<EditProfile />);
  };

  return (
    <section>
      <Navbar />
      <div className="bg-slate-200">
        <div className="container mx-auto lg:p-32">
          <div className="lg:grid grid-cols-4 gap-6">
            <div className="col-span-1 lg:h-[350px] bg-white py-6">
              <div className="border-b-2 border-blue">
                <img src={userImg} alt="" className=" mask mask-squircle w-20 mx-auto mb-5 " />
              </div>
              <div className="pt-5  flex flex-col  ">
                <li
                  onClick={handlePersonalInfo}
                  className=" flex items-center gap-2 hover:bg-blue hover:text-white p-4 "
                >
                  <FaUserAlt /> Personal Info
                </li>
                <li
                  onClick={handleUserEdit}
                  className=" flex items-center gap-2 hover:bg-blue hover:text-white p-4"
                >
                  <FaWhmcs /> Edit Profile
                </li>
                <li
                  onClick={logOut}
                  className=" flex items-center gap-2 hover:bg-blue hover:text-white p-4"
                >
                  <FaSignInAlt /> Log Out
                </li>
              </div>
            </div>
            <div className="col-span-3">{userInfo}</div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default UserProfile;
