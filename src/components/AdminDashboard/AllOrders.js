/* eslint-disable array-callback-return */
import React, { useState } from "react";
import {
  MdDelete,
  MdDone,
  MdDoneAll,
  MdFileCopy,
  MdOutlineFileDownload,
  MdOutlineFreeCancellation,
  MdOutlineLocalPrintshop,
  MdOutlinePendingActions,
  MdOutlineSmsFailed,
  MdOutlineViewInAr,
  MdPictureAsPdf,
} from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";
import adminImg from "../../images/pro.png";
import useSWR, { useSWRConfig } from "swr";
// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const AllOrders = () => {
  // const [orderList, setOrderList] = useState([]) singleOrder ;
  const [searchOrder, setSearchOrder] = useState("");
  const { mutate } = useSWRConfig();

  const { data: orderList } = useSWR(`http://localhost:8000/orders`, fetcher);

  //  orders delete functionality
  const handleDelete = id => {
    const proceed = window.confirm("Are you sure , you want to delete ?");
    if (proceed) {
      const url = `http://localhost:8000/orderDelete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          mutate("http://localhost:8000/orders");
        });
    }
  };

  return (
    <div className="m-10">
      <h3>Order List</h3>
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
        <div className="lg:flex justify-between p-5 items-center ">
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
            <select className="select select-bordered w-full max-w-xs">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>

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
        {/* order lists table*/}
        <div>
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead className="text-[16px] uppercase">
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
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
                    .filter(items => {
                      if (searchOrder === "") {
                        return items;
                      } else if (
                        items?.firstName.toLowerCase().includes(searchOrder.toLowerCase())
                      ) {
                        return items;
                      }
                    })
                    .map(data => (
                      <tr key={data?._id}>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td className="text-blue">#{data?._id.slice(2, 7)}</td>
                        <td>{data?.date}</td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={adminImg} alt="adminImg" />
                              </div>
                            </div>
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
                            <div className=" flex items-center gap-2 text-yellow">
                              <BiLoaderCircle /> Pending
                            </div>
                          ) : (
                            <div className=" flex items-center gap-2 text-green">
                              <MdDone /> {data?.payment}
                            </div>
                          )}
                        </td>
                        <td>Delivered</td>
                        <td>
                          <div className="flex gap-2 text-white">
                            <button className=" bg-blue p-2 rounded flex gap-1 items-center">
                              <MdOutlineViewInAr /> View
                            </button>
                            <button
                              onClick={() => handleDelete(data?._id)}
                              className=" bg-red p-2 rounded flex gap-1 items-center"
                            >
                              <MdDelete /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
