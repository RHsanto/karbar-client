/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { BsPerson } from "react-icons/bs";
import useFirebase from "../../hooks/useFirebase";
import useSWR from "swr";
import adminImg from "../../../src/images/robin-hood.jpg";
const fetcher = (...args) => fetch(...args).then(res => res.json());
const DashHeader = () => {
  const { user } = useFirebase();
  const { data } = useSWR(`https://dokan-backend.onrender.com/user/${user.email}`, fetcher);
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
              <div className="w-12  rounded-full">
                <img src={adminImg} alt="img" />
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <h5>Robin Hood</h5>
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
