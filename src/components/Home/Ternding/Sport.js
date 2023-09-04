/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowsFullscreen, BsFillBagCheckFill, BsStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { fetchProductsByType } from "../../../Redux/Slice/ProductSlice";
import { addToCart } from "../../../Redux/Slice/CartSlice";

const Sport = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { products, loading, error } = useSelector(state => state.product);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState("S");

  const dispatch = useDispatch();
  const type = "sport";

  useEffect(() => {
    dispatch(fetchProductsByType(type));
  }, [dispatch, type]);

  useEffect(() => {
    // Apply filters to the product data whenever the filter values change
    const applyFilters = () => {
      let filteredData = [...products];

      if (priceFilter) {
        filteredData = filteredData.filter(product => product.price <= parseInt(priceFilter));
      }

      if (categoryFilter) {
        filteredData = filteredData.filter(product => product.category === categoryFilter);
      }

      if (sizeFilter) {
        filteredData = filteredData.filter(product => product.size === sizeFilter);
      }

      if (colorFilter) {
        filteredData = filteredData.filter(product => product.color === colorFilter);
      }

      setFilteredProducts(filteredData);
    };

    applyFilters();
  }, [products, priceFilter, categoryFilter, sizeFilter, colorFilter]);

  // add cart
  const handleAdd = product => {
    dispatch(addToCart(product));
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
    <div className="container mx-auto lg:px-32 lg:py-20">
      <div className="pt-32 lg:pt-10 px-5 lg:px-0">
        <h3>Sport collection</h3>
        <div className="my-5 leading-7">
          We not only help you design exceptional products, but also make it easy for you <br /> to
          share your designs with more like-minded people.
        </div>
      </div>
      <div className="lg:flex gap-5 pt-10 border-t">
        {/* here product filter section */}
        <div className="p-10 lg:p-0">
          {/* Price Filter */}
          <div className="flex items-center">
            <h4>Price</h4>
            <input
              className="border outline-none p-2 mx-2 rounded-lg"
              type="number"
              min="0"
              value={priceFilter}
              onChange={e => setPriceFilter(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="my-5">
            <h4>Category</h4>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="All"
                className="cursor-pointer"
                checked={categoryFilter === ""}
                onChange={e => setCategoryFilter(e.target.checked ? "" : "")}
              />
              <label>All</label>
            </div>
            <div className="gap-2 flex items-center my-3 ">
              <input
                type="checkbox"
                value="travel bag"
                className="cursor-pointer"
                checked={categoryFilter === "travel bag"}
                onChange={e => setCategoryFilter(e.target.checked ? "travel bag" : "")}
              />
              <label>Travel Bag</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="clothing"
                className="cursor-pointer"
                checked={categoryFilter === "clothing"}
                onChange={e => setCategoryFilter(e.target.checked ? "clothing" : "")}
              />
              <label>Clothing</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="backpacks"
                className="cursor-pointer"
                checked={categoryFilter === "backpacks"}
                onChange={e => setCategoryFilter(e.target.checked ? "backpacks" : "")}
              />
              <label>Backpacks</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="accessories"
                className="cursor-pointer"
                checked={categoryFilter === "accessories"}
                onChange={e => setCategoryFilter(e.target.checked ? "accessories" : "")}
              />
              <label>Accessories</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="new arrivals"
                className="cursor-pointer"
                checked={categoryFilter === "new arrivals"}
                onChange={e => setCategoryFilter(e.target.checked ? "new arrivals" : "")}
              />
              <label>New Arrivals</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="sale"
                className="cursor-pointer"
                checked={categoryFilter === "sale"}
                onChange={e => setCategoryFilter(e.target.checked ? "sale" : "")}
              />
              <label>Sale</label>
            </div>
          </div>

          {/* Size Filter */}
          <div className="my-5">
            <h4>Size</h4>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="S"
                checked={sizeFilter === "S"}
                onChange={e => setSizeFilter(e.target.checked ? "S" : "")}
              />
              <label>S</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="M"
                checked={sizeFilter === "M"}
                onChange={e => setSizeFilter(e.target.checked ? "M" : "")}
              />
              <label>M</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="L"
                checked={sizeFilter === "L"}
                onChange={e => setSizeFilter(e.target.checked ? "L" : "")}
              />
              <label>L</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="XL"
                checked={sizeFilter === "XL"}
                onChange={e => setSizeFilter(e.target.checked ? "XL" : "")}
              />
              <label>XL</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="XXL"
                checked={sizeFilter === "XXL"}
                onChange={e => setSizeFilter(e.target.checked ? "XXL" : "")}
              />
              <label>XXL</label>
            </div>
            {/* Add more checkbox inputs for other sizes */}
          </div>

          {/* Color Filter */}
          <div className="my-5">
            <h4>Color</h4>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="white"
                checked={colorFilter === "white"}
                onChange={e => setColorFilter(e.target.checked ? "white" : "")}
              />
              <label>White</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="red"
                checked={colorFilter === "red"}
                onChange={e => setColorFilter(e.target.checked ? "red" : "")}
              />
              <label>Red</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="green"
                checked={colorFilter === "green"}
                onChange={e => setColorFilter(e.target.checked ? "green" : "")}
              />
              <label>Green</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="blue"
                checked={colorFilter === "blue"}
                onChange={e => setColorFilter(e.target.checked ? "blue" : "")}
              />
              <label>Blue</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="black"
                checked={colorFilter === "black"}
                onChange={e => setColorFilter(e.target.checked ? "black" : "")}
              />
              <label>Black</label>
            </div>
            <div className="gap-2 flex items-center my-3">
              <input
                type="checkbox"
                value="brown"
                checked={colorFilter === "brown"}
                onChange={e => setColorFilter(e.target.checked ? "brown" : "")}
              />
              <label>Brown</label>
            </div>
          </div>
        </div>
        {/* here Filter Results */}
        <div className="lg:grid grid-cols-3 gap-8 p-10 lg:p-0">
          {loading && <h5>Loading....</h5>}
          {error && <h5 className="text-red">Internal server error....</h5>}
          {filteredProducts.map(product => (
            <div key={product?._id}>
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
                <div className="hidden absolute left-4 bottom-3 select_size ">
                  <div className="flex my-3">
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
                                        Fashion is a form of self-expression and autonomy at a
                                        particular period and place and in a specific context, of
                                        clothing, footwear, lifestyle, accessories, makeup,
                                        hairstyle, and body posture.
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
                    <AiFillStar className="text-yellow" /> {product?.star} ({product?.reviews}{" "}
                    reviews)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sport;
