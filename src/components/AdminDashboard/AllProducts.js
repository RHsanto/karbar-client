/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import DashTemplate from "./DashTemplate";
import DashHeader from "./DashHeader";
import {
  MdDelete,
  MdFileCopy,
  MdOutlineAdd,
  MdOutlineFileDownload,
  MdOutlineLocalPrintshop,
  MdPictureAsPdf,
} from "react-icons/md";
// import { BiLoaderCircle } from "react-icons/bi";
// import { HiShieldCheck } from "react-icons/hi";
// import adminImg from "../../images/pro.png";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductsByType } from "../../Redux/Slice/ProductSlice";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    fetch("https://dokan-backend.onrender.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  // const { products, loading, error } = useSelector(state => state.product);

  // const dispatch = useDispatch();
  // const type = "kids";

  // useEffect(() => {
  //   dispatch(fetchProductsByType());
  // }, [dispatch]);
  // console.log(products);

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
          <div className="lg:flex justify-between p-5 items-center ">
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
              {/* add product btn */}
              <>
                <button className=" btn btn-info text-white ">
                  {" "}
                  <MdOutlineAdd className="text-xl" /> Add Product
                </button>
              </>
            </div>
          </div>
          {/* product table*/}
          <div>
            <div className="overflow-x-auto">
              <table className="table border">
                {/* head */}
                <thead className="text-[16px] uppercase">
                  <tr className="bg-slate-300 text-black ">
                    <th>No</th>
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
                              className=" bg-red p-2 rounded flex gap-1 items-center text-white"
                            >
                              <MdDelete /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
