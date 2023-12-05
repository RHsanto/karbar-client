import React from "react";
import DashTemplate from "../DashTemplate";
import DashHeader from "../DashHeader";

const AddProduct = () => {
  return (
    <div className="lg:grid grid-cols-6 h-[3000px]">
      <div className="cols-span-1 m-5">
        <DashTemplate />
      </div>
      <div className="pt-5 lg:pt-0 lg:m-10 bg-slate-100 col-span-5 rounded-lg">
        <div>
          <DashHeader />
        </div>
        <div className=" m-5 lg:m-10">
          <h3 className="mb-16">
            {" "}
            <span className="text-gray-400">Product /</span> Add Product
          </h3>
          {/* add product form  */}
          <div className="bg-white p-10">
            <h4 className="text-center text-blue uppercase">Add a new product</h4>
            <div className="my-5 border-2 lg:w-3/4 p-6 mx-auto">
              <span>
                <b>Product information</b>
              </span>
              {/* name input */}
              <div className="mt-10 mb-6">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="product title"
                  className="input input-bordered w-full my-2"
                />
              </div>
              {/* price & quantity input */}
              <div className=" lg:flex gap-6 mb-6">
                <div className=" lg:w-2/4">
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="product price"
                    className="input input-bordered w-full my-2"
                  />
                </div>
                <div className="lg:w-2/4">
                  <label>Quantity</label>
                  <input
                    type="number"
                    placeholder="product quantity"
                    className="input input-bordered w-full my-2"
                  />
                </div>
              </div>
              {/* message & color input */}
              <div className=" lg:flex gap-6 mb-6">
                <div className=" lg:w-2/4">
                  <label>Color</label>
                  <input
                    type="text"
                    placeholder="product color"
                    className="input input-bordered w-full my-2"
                  />
                </div>
                <div className="lg:w-2/4">
                  <label>Message</label>
                  <input
                    type="text"
                    placeholder="product short msg"
                    className="input input-bordered w-full my-2"
                  />
                </div>
              </div>
              {/* size & category input */}
              <div className=" lg:flex gap-6 mb-6">
                <div className=" lg:w-2/4">
                  <label>Category</label> <br />
                  <select className="select select-bordered w-full my-2">
                    <option disabled selected>
                      select product category
                    </option>
                    <option value="Travel Bag">Travel Bag</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Sale">Sale</option>
                    <option value="New arrivals">New arrivals</option>
                    <option value="Backpacks">Backpacks</option>
                  </select>
                </div>
                <div className=" lg:w-2/4">
                  <label>Size</label> <br />
                  <select className="select select-bordered w-full my-2">
                    <option disabled selected>
                      select product size
                    </option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>
              {/*  description*/}
              <div className="mb-6 ">
                <label>Description</label> <br />
                <textarea
                  className="w-full textarea textarea-bordered
                 my-2"
                  placeholder="Write product description"
                ></textarea>
              </div>
              {/* Media or img upload  */}
              <div className="my-5 ">
                <h5 className="text-xl mb-3">Media</h5>
                <div className="w-full border-dashed border-2 border-blue rounded-lg py-32 my-2">
                  <div className="flex flex-col gap-6 text-center">
                    <span className="text-xl">Drag and drop your image here</span>
                    <b>OR</b>
                    <div>
                      <button className="btn bg-offBlue text-blue">Browse image</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <button type="submit" className="btn btn-info text-white">
                  Publish product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
