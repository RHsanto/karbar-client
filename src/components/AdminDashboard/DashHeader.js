/* eslint-disable no-unused-vars */
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import adminImg from "../../images/pro.png";
import useFirebase from "../../hooks/useFirebase";
import { FcHome } from "react-icons/fc";
const DashHeader = () => {
  const { user } = useFirebase();

  return (
    <div>
      {/*  Dashboard Header */}
      <div className=" m-10 py-3 px-10 rounded flex justify-between  bg-white">
        <>
          <Link to="/" className="flex items-center gap-2">
            <FcHome className="text-2xl" /> <span className="text-[20px]">Home</span>
          </Link>
        </>

        <div className="lg:flex gap-3">
          <div>
            {" "}
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={adminImg} alt="img" />
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <h5>{user?.displayName}</h5>
            <p>Admin</p>
          </div>
        </div>
        {/* <div>
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
              className="mt-2 dropdown-content
               z-[1] menu p-2  bg-base-100 rounded-box w-72 gap-2"
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
              <div>
                <div>
                  <button onClick={logOut} className="btn bg-red w-full text-white">
                    <BiLogOutCircle className="text-2xl" /> Sign out
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashHeader;
