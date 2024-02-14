/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useRef, useState } from "react";
import {
  MdDeleteForever,
  MdDoneAll,
  MdFileCopy,
  MdOutlineFileDownload,
  MdOutlineFreeCancellation,
  MdOutlineLocalPrintshop,
  MdOutlinePendingActions,
  MdOutlineSmsFailed,
  MdOutlineViewInAr,
  MdPerson,
  MdPictureAsPdf,
} from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";
import { HiShieldCheck } from "react-icons/hi";
import adminImg from "../../../images/pro.png";
import useSWR, { useSWRConfig } from "swr";
import { Link } from "react-router-dom";
import DashTemplate from "../DashTemplate";
import DashHeader from "../DashHeader";
import generatePDF from "react-to-pdf";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { useReactToPrint } from "react-to-print";
import Pagination from "../Pagination";
// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const AllOrders = () => {
  const textRef = useRef();
  const [searchOrder, setSearchOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { mutate } = useSWRConfig();
  const { data: orderList } = useSWR(`https://dokan-backend.onrender.com/orders`, fetcher);

  //  orders delete functionality
  const handleDelete = () => {
    // const proceed = window.confirm("Are you sure , you want to delete ?");
    // if (proceed) {
    //   const url = `https://dokan-backend.onrender.com/orderDelete/${id}`;
    //   fetch(url, {
    //     method: "DELETE",
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       mutate("https://dokan-backend.onrender.com/orders");
    //     });
    // }
    toast.error("Only Admin Access can Delete!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // Copy function
  const copyToClipboard = () => {
    // Create a string representing the table data
    const tableData = Array?.from(textRef?.current?.querySelectorAll("tbody tr"))?.map(row =>
      Array?.from(row.children)
        ?.map(cell => cell.innerText)
        ?.join("\t")
    );

    // Join the rows with a newline character
    const copyText = tableData?.join("\n");

    // Adding text value to clipboard using copy function
    let isCopy = copy(copyText);

    if (isCopy) {
      toast.success(" Copy to clipboard", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Print function
  const handlePrint = useReactToPrint({
    content: () => textRef.current,
  });

  // Pagination Function
  const ITEMS_PER_PAGE = 10;
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const totalPages = Math.ceil((Array.isArray(orderList) ? orderList.length : 0) / ITEMS_PER_PAGE);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="lg:grid grid-cols-6 h-[2000px]">
      <div className="cols-span-1 m-5">
        <DashTemplate />
      </div>
      <div className="pt-5 lg:pt-0 m-10 bg-slate-100 col-span-5 rounded-lg ">
        <div className="mb-16">
          <DashHeader />
        </div>
        {/* Order list  */}
        <div className="m-10">
          <h3>
            <span className="text-gray-400">Order /</span> Order List
          </h3>
          {/* order record */}
          <div className="lg:grid grid-cols-4 gap-4 border bg-white rounded-lg my-10">
            <div className="flex justify-between p-10 border-r ">
              <div>
                <h3>55</h3>
                <h5>Pending Payment</h5>
              </div>
              <div>
                <MdOutlinePendingActions className="text-3xl text-yellow" />
              </div>
            </div>
            <div className="flex justify-between p-10 border-r">
              <div>
                <h3>1214</h3>
                <h5>Completed</h5>
              </div>
              <div>
                <MdDoneAll className="text-3xl text-green" />
              </div>
            </div>
            <div className="flex justify-between p-10 border-r">
              <div>
                <h3>25</h3>
                <h5>Canceled</h5>
              </div>
              <div>
                <MdOutlineFreeCancellation className="text-3xl text-red" />
              </div>
            </div>
            <div className="flex justify-between p-10">
              <div>
                <h3>14</h3>
                <h5>Failed</h5>
              </div>
              <div>
                <MdOutlineSmsFailed className="text-3xl text-red" />
              </div>
            </div>
          </div>
          {/* Order History section */}
          <div className="border bg-white">
            <div className="lg:flex justify-between p-5 items-center  my-2">
              <div className="mb-5 lg:mb-0">
                <input
                  onChange={event => {
                    setSearchOrder(event.target.value);
                  }}
                  type="text"
                  placeholder="Search Order"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex gap-5 items-center">
                {/* Pagination */}
                {/* <select className="select select-bordered w-full max-w-xs">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </select> */}

                {/* Exports Orders*/}
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="btn m-1 ">
                    <div className="flex items-center gap-1">
                      <MdOutlineFileDownload className=" text-2xl" />
                      Exports
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="border dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                  >
                    <li>
                      <button onClick={handlePrint} className="text-[16px]">
                        <MdOutlineLocalPrintshop /> Print
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => generatePDF(textRef, { filename: "page.pdf" })}
                        className="text-[16px] my-2"
                      >
                        <MdPictureAsPdf /> Pdf
                      </button>
                    </li>
                    <li>
                      <button onClick={copyToClipboard} className="text-[16px] ">
                        <MdFileCopy /> Copy
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* order lists table*/}
            <div>
              <div className="overflow-x-auto">
                <table className="table border" ref={textRef}>
                  {/* head */}
                  <thead className="text-[16px] uppercase">
                    <tr className="bg-slate-300 text-black">
                      <th>No</th>
                      <th>O-Code</th>
                      <th>Date</th>
                      <th>Customers</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Actions</th>
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
                        .slice(firstIndex, lastIndex)
                        .filter(items => {
                          if (searchOrder === "") {
                            return items;
                          } else if (
                            items?.firstName.toLowerCase().includes(searchOrder.toLowerCase())
                          ) {
                            return items;
                          }
                        })
                        .map((data, index) => (
                          <tr key={data?._id}>
                            <th>{index + 1}</th>
                            <td className="text-blue">#{data?._id.slice(2, 7)}</td>
                            <td>{data?.date}</td>
                            <td>
                              <div className="flex items-center space-x-3">
                                <h3 className="border-2 rounded-full border-black">
                                  <MdPerson />
                                </h3>
                                <div>
                                  <div className="font-bold">
                                    {data?.firstName} {data?.lastName}
                                  </div>
                                  <div className="text-sm opacity-50">{data?.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="font-bold text-[15px]">
                              {data?.payment === "pending" ? (
                                <div className=" flex items-center gap-2 text-blue">
                                  <BiLoaderCircle /> Pending
                                </div>
                              ) : (
                                <div className=" flex items-center gap-2 text-green">
                                  <HiShieldCheck /> {data?.payment}
                                </div>
                              )}
                            </td>
                            <td>Delivered</td>
                            <td>
                              <div className="flex gap-2 text-white">
                                <Link to={`/order/${data?._id}`}>
                                  <button className="bg-sky-100 text-blue p-2 rounded flex gap-1 items-center">
                                    <MdOutlineViewInAr className="text-xl" /> View
                                  </button>
                                </Link>
                                <button
                                  // onClick={() => handleDelete(data?._id)}
                                  onClick={handleDelete}
                                  className=" bg-offOrange text-red  p-2 rounded flex gap-1 items-center"
                                >
                                  <MdDeleteForever className="text-xl" /> Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                {/* pagination */}
                <div className="p-5">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    changePage={changePage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
