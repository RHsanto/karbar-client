import React from "react";
import DashTemplate from "../DashTemplate";
import DashHeader from "../DashHeader";

const AddProduct = () => {
  return (
    <div className="lg:grid grid-cols-6">
      <div className="cols-span-1 m-5">
        <DashTemplate />
      </div>
      <div className="pt-5 lg:pt-0 m-10 bg-slate-100 col-span-5 rounded-lg">
        <div>
          <DashHeader />
        </div>
        <div className="m-10">
          <h3 className="mb-16">
            {" "}
            <span className="text-gray-400">Product /</span> Add Product
          </h3>
          {/* add product form  */}
          <div className="bg-white p-10">
            <h4>Add a new product</h4>
            <div className="my-5 border lg:w-3/4 p-6">
              <span>
                <b>Product information</b>
              </span>
              <div className="mt-10 mb-5">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="product title"
                  className="input input-bordered w-full my-2"
                />
              </div>
              <div className=" my-5">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="product title"
                  className="input input-bordered w-full my-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
