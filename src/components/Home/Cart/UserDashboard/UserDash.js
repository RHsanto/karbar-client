import React from "react";
import useFirebase from "../../../../hooks/useFirebase";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";
const UserDash = () => {
  const { user } = useFirebase();
  // console.log(user);
  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:px-32 py-20 ">
        <h4>Your Account</h4>
        <div className="p-5 border-2 my-10 w-2/5 ">
          <div className="flex justify-center mb-10">
            <FaUserCircle className="text-6xl" />
          </div>
          <div className="flex gap-5 border-b mb-5 ">
            <h5 className="pb-3 ">Name : </h5>
            {user?.displayName}
          </div>
          <div className="flex gap-5">
            <h5>Email : </h5>
            {user?.email}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDash;
