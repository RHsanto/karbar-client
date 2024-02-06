/* eslint-disable array-callback-return */
import React, { useRef, useState } from "react";
import DashTemplate from "../DashTemplate";
import DashHeader from "../DashHeader";
import {
  MdDeleteForever,
  MdFileCopy,
  MdOutlineAdd,
  MdOutlineFileDownload,
  MdOutlineLocalPrintshop,
  MdPictureAsPdf,
} from "react-icons/md";
import useSWR from "swr";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import generatePDF from "react-to-pdf";
import Pagination from "../Pagination";

const fetcher = (...args) => fetch(...args).then(res => res.json());
const AllProducts = () => {
  const textRef = useRef();
  // const { mutate } = useSWRConfig();
  const [searchProduct, setSearchProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: products } = useSWR(`https://dokan-backend.onrender.com/products`, fetcher);

  //  product delete func
  // const handleDelete = id => {
  //   const proceed = window.confirm("Are you sure , you want to delete ?");
  //   if (proceed) {
  //     const url = `https://dokan-backend.onrender.com/productDelete/${id}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         mutate("https://dokan-backend.onrender.com/products");
  //       });
  //   }
  // };
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

  // Pagination
  const ITEMS_PER_PAGE = 10;
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const totalPages = Math.ceil((Array.isArray(products) ? products.length : 0) / ITEMS_PER_PAGE);

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
    <div className="lg:grid grid-cols-6">
      <div className="cols-span-1 m-5">
        <DashTemplate />
      </div>
      <div className="pt-5 lg:pt-0 m-10 bg-slate-100 col-span-5 rounded-lg">
        <div>
          <DashHeader />

          <h3 className="mx-10 my-16">
            {" "}
            <span className="text-gray-400">Product /</span> Product List
          </h3>
        </div>
        {/* start product table section */}
        <div className="border bg-white m-10">
          <div className="lg:flex justify-between p-5 items-center my-2">
            <div className="mb-5 lg:mb-0">
              <input
                onChange={event => {
                  setSearchProduct(event.target.value);
                }}
                type="text"
                placeholder="Search Product"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex gap-4 items-center">
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
              {/* add product btn */}
              <button className=" btn btn-info text-white ">
                <Link to="/adminDash/addProduct" className="flex items-center gap-2">
                  <MdOutlineAdd className="text-xl" /> Add Product
                </Link>
              </button>
            </div>
          </div>
          {/* product table*/}
          <div>
            <div className="overflow-x-auto">
              <table className="table border" ref={textRef}>
                {/* head */}
                <thead className="text-[16px] uppercase">
                  <tr className="bg-slate-300 text-black ">
                    <th>No</th>
                    <th>B-code</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Loading animation */}
                  {!products && (
                    <div className="m-10 flex items-center gap-4">
                      Loading
                      <span className="loading loading-dots loading-lg"></span>
                    </div>
                  )}
                  {products &&
                    products
                      .slice(firstIndex, lastIndex)
                      .filter(items => {
                        if (setSearchProduct === "") {
                          return items;
                        } else if (
                          items?.name.toLowerCase().includes(searchProduct.toLowerCase())
                        ) {
                          return items;
                        }
                      })
                      .map((data, index) => (
                        <tr key={data?._id}>
                          <th>{index + 1}</th>
                          <th>
                            <span className="text-blue">{data?._id.slice(3, 9)}</span>
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div>
                                <img
                                  className="w-12 bg-gray-300 rounded-lg"
                                  src={data?.productImg}
                                  alt="p-img"
                                />
                              </div>
                              <div>
                                <h5>{data?.name}</h5>
                                <p className="text-gray-400">{data?.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="capitalize">{data?.category}</td>
                          <td>Out Of Stock</td>
                          <td>${data?.price}</td>
                          <td>21</td>
                          <td>
                            <button
                              // onClick={() => handleDelete(data?._id)}
                              className=" bg-offOrange text-red p-2 rounded flex gap-1 items-center "
                            >
                              <MdDeleteForever className="text-xl" />
                              Delete
                            </button>
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
  );
};

export default AllProducts;
