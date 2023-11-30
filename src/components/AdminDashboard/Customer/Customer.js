/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import DashTemplate from "../DashTemplate";
import DashHeader from "../DashHeader";
import useSWR from "swr";
import {
  MdFileCopy,
  MdOutlineFileDownload,
  MdOutlineLocalPrintshop,
  MdPictureAsPdf,
} from "react-icons/md";
import adminImg from "../../../images/pro.png";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Customer = () => {
  const [searchCustomer, setSearchCustomer] = useState("");
  const [countryFlags, setCountryFlags] = useState({});
  const { data: orderList } = useSWR(`https://dokan-backend.onrender.com/orders`, fetcher);

  useEffect(() => {
    // Fetch country flags from rest countries API
    axios.get("https://restcountries.com/v2/all?fields=name,alpha2Code,flags").then(response => {
      const flagsMap = {};
      response.data.forEach(country => {
        flagsMap[country.alpha2Code] = country.flags.svg;
      });
      setCountryFlags(flagsMap);
    });
  }, []);

  return (
    <div className="lg:grid grid-cols-6">
      <div className="cols-span-1 m-5">
        <DashTemplate />
      </div>
      <div className="pt-5 lg:pt-0 m-10 bg-slate-100 col-span-5 rounded-lg">
        <div>
          <DashHeader />
        </div>
        {/* customer table */}
        <div className="m-10">
          <h3 className="my-16">
            <span className="text-gray-400">Dashboard /</span>All Customers
          </h3>
          <div className="border bg-white rounded">
            <div className="lg:flex justify-between p-5 items-center my-2">
              <div className="mb-5 lg:mb-0">
                <input
                  onChange={event => {
                    setSearchCustomer(event.target.value);
                  }}
                  type="text"
                  placeholder="Search Customer"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex gap-5 items-center">
                {/* Pagination */}
                <select className="select select-bordered w-full max-w-xs">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </select>

                {/* Exports Orders*/}
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="btn m-1">
                    <div className="flex items-center gap-1">
                      <MdOutlineFileDownload className="text-2xl" />
                      Exports
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="border dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <div className="text-[16px]">
                        <MdOutlineLocalPrintshop /> Print
                      </div>
                    </li>
                    <li>
                      <div className="text-[16px]">
                        <MdPictureAsPdf /> Pdf
                      </div>
                    </li>
                    <li>
                      <div className="text-[16px]">
                        <MdFileCopy /> Copy
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* customer lists table*/}
            <div>
              <div className="overflow-x-auto">
                <table className="table border">
                  {/* head */}
                  <thead className="text-[16px] uppercase">
                    <tr className="bg-slate-300 text-black">
                      <th>No</th>
                      <th>Customer id</th>
                      <th>Customer</th>
                      <th>Country</th>
                      <th>Order</th>
                      <th>Total spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Loading animation */}
                    {!orderList && (
                      <div className="m-10 flex items-center gap-4">
                        Loading
                        <span className="loading loading-dots loading-lg"></span>
                      </div>
                    )}
                    {orderList &&
                      orderList
                        .filter(items => {
                          if (searchCustomer === "") {
                            return items;
                          } else if (
                            items?.firstName.toLowerCase().includes(searchCustomer.toLowerCase())
                          ) {
                            return items;
                          }
                        })
                        .map((data, index) => {
                          // Count Total order spent money
                          const totalSpent = data.orders.reduce(
                            (acc, order) => acc + order.price,
                            0
                          );
                          // include shipping and tax amount
                          const taxAmount = 0.15 * totalSpent;
                          const shipping = 56;
                          const allSpent = totalSpent + shipping + taxAmount;

                          return (
                            <tr key={data?._id}>
                              <th>{index + 1}</th>
                              <td className="text-blue font-bold">{data?._id.slice(3, 9)}</td>
                              <td>
                                <div className="flex items-center space-x-3">
                                  <img className="w-12 rounded-lg" src={adminImg} alt="adminImg" />
                                  <div>
                                    <div className="font-bold">
                                      {data?.firstName} {data?.lastName}
                                    </div>
                                    <div className="text-sm opacity-50">{data?.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                {/* Display country flag  */}
                                <div className="flex items-center gap-2">
                                  <div>
                                    {countryFlags[data?.country] && (
                                      <img
                                        className="w-7 h-7 rounded-full shadow-lg object-cover "
                                        src={countryFlags[data?.country]}
                                        alt={`${data?.country} flag`}
                                      />
                                    )}
                                  </div>
                                  <div>{data?.country}</div>
                                </div>
                              </td>
                              <td>{data?.orders?.length}</td>
                              <td>${allSpent.toFixed(2)}</td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
