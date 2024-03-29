/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowsFullscreen, BsCart4, BsFillBagCheckFill, BsStars } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Slice/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState("S");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  // add cart
  const handleAdd = product => {
    // Product is not in the cart, add it and show success toast message
    dispatch(addToCart(product));
    toast.success("Added to Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // here add modal products
  const handleProductClick = product => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // set size selected
  const handleSize = size => {
    setSize(size);
  };

  return (
    <div>
      {/* here set img  */}
      <div className=" hover_img bg-gray-100 rounded-2xl relative lg:h-[340px]">
        <img src={product?.productImg} alt="img" />
        {/* here top msg */}
        {product?.message ? (
          <small className="absolute top-4 left-4">
            <button className="flex gap-1 items-center shadow-lg bg-white px-4 py-1 rounded-full ">
              <BsStars />
              {product?.message}
            </button>
          </small>
        ) : (
          ""
        )}
        {/* here hover items */}
        <div className="hidden absolute left-16 lg:left-4 md:left-8 bottom-3 select_size ">
          <div className="lg:flex md:flex hidden my-3 justify-between">
            <button
              onClick={() => handleAdd(product)}
              className=" bg-black text-white px-3 py-2 rounded-full"
            >
              Add to cart
            </button>

            {/* Modal Start */}
            <>
              <button
                onClick={() => handleProductClick(product)}
                className="flex items-center gap-1  ml-2 bg-white px-5 py-1 rounded-full"
              >
                <BsArrowsFullscreen /> Quick View
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="p-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex justify-end">
                          <button onClick={() => setShowModal(false)}>
                            <RxCross1 className="text-black " />
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-5 grid grid-cols-2 gap-8">
                          {/* img section */}
                          <div>
                            <div className="bg-gray-100 rounded-2xl relative h-full ">
                              <img src={product?.productImg} alt="img" srcSet="" />
                            </div>
                            <small className="absolute top-10 left-10">
                              <button className="flex gap-1 items-center shadow-lg bg-white px-4 py-1 rounded-full ">
                                <BsStars />
                                {product?.message}
                              </button>
                            </small>
                          </div>
                          {/* content section */}
                          <div>
                            <h4>{product?.name}</h4>
                            <div className="flex justify-between my-3 gap-4">
                              {/* price */}
                              <button className="text-green  font-bold border-2 px-2 rounded-lg border-green">
                                ${product?.price}.00
                              </button>
                              {/* ratings */}
                              <p className="flex items-center">
                                <AiFillStar className="text-yellow" /> {product?.star} (
                                {product?.reviews} reviews)
                              </p>
                            </div>
                            {/* size section */}
                            <div className="my-5">
                              <h5>Size: {size}</h5>
                              <div className="flex justify-between gap-2 my-3  font-bold">
                                <div
                                  onClick={() => handleSize("S")}
                                  className={` ${
                                    size === "S" && "bg-blue text-white"
                                  } border   cursor-pointer  border-blue px-4 py-2 rounded-lg`}
                                >
                                  S
                                </div>
                                <div
                                  onClick={() => handleSize("L")}
                                  className={`${
                                    size === "L" && "bg-blue text-white"
                                  } border  cursor-pointer  border-blue px-4 py-2 rounded-lg`}
                                >
                                  L
                                </div>
                                <div
                                  onClick={() => handleSize("M")}
                                  className={`${
                                    size === "M" && "bg-blue text-white"
                                  } border   cursor-pointer  border-blue px-4 py-2 rounded-lg`}
                                >
                                  M
                                </div>
                                <div
                                  onClick={() => handleSize("XL")}
                                  className={`${
                                    size === "XL" && " bg-blue text-white"
                                  } border   cursor-pointer  border-blue px-4 py-2 rounded-lg`}
                                >
                                  XL
                                </div>
                                <div
                                  onClick={() => handleSize("XXL")}
                                  className={`${
                                    size === "XXL" && " bg-blue text-white"
                                  } border   cursor-pointer  border-blue px-4 py-2 rounded-lg`}
                                >
                                  XL
                                </div>
                              </div>
                            </div>
                            {/* add button */}
                            <button
                              onClick={() => handleAdd(product)}
                              className="flex justify-center items-center gap-2 bg-black
                                     text-white  p-3 rounded-full w-full "
                            >
                              <BsFillBagCheckFill /> Add to cart
                            </button>
                            {/* description */}
                            <div className="my-5">
                              <div className="bg-gray-100 py-2 px-4 rounded-lg font-bold">
                                Description
                              </div>
                              <div className="p-3 text-slate-500">
                                Fashion is a form of self-expression and autonomy at a particular
                                period and place and in a specific context, of clothing, footwear,
                                lifestyle, accessories, makeup, hairstyle, and body posture.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            {/* Modal Closed */}
          </div>
        </div>
      </div>
      {/* here set img description */}
      <div className="product_details py-3">
        <h5>{product?.name}</h5>
        <p className="pt-1">{product?.description}</p>
        <div className="price_review py-5 flex justify-between">
          <button className="text-green  font-bold border-2 px-2 rounded-lg border-green">
            ${product?.price}.00
          </button>
          <p className="flex items-center">
            <AiFillStar className="text-yellow" /> {product?.star} ({product?.reviews} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
