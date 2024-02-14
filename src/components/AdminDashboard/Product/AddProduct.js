/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DashTemplate from "../DashTemplate";
import DashHeader from "../DashHeader";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageURL, setImageURL] = useState("");

  // Img upload functionality
  const handleImageUpload = async e => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      // Use ImgBB API to upload the image
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=573a29fff78ba91d05a36baad90b31d9",
        formData
      );
      // Get the uploaded image URL
      setImageURL(response.data.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // remove upload img
  const removeImg = () => {
    setImageURL("");
  };
  // State to store the uploaded
  const onSubmit = data => {
    // Attach imageURL to the data before submitting to the server
    data.productImg = imageURL;
    data.star = "4.3";
    data.reviews = "254";

    console.log(data);

    axios.post("https://dokan-backend.onrender.com/product", data).then(() => {
      reset();
      setImageURL(""); // Clear imageURL after submitting
    });
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name input */}
                <div className="mt-10 mb-6">
                  <label>Name</label>
                  <input
                    {...register("name", { required: true })}
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
                      {...register("price", { required: true })}
                      type="number"
                      placeholder="product price"
                      className="input input-bordered w-full my-2"
                    />
                  </div>
                  <div className="lg:w-2/4">
                    <label>Quantity</label>
                    <input
                      {...register("quantity", { required: true })}
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
                      {...register("color", { required: true })}
                      type="text"
                      placeholder="product color"
                      className="input input-bordered w-full my-2"
                    />
                  </div>
                  <div className="lg:w-2/4">
                    <label>Message</label>
                    <input
                      {...register("message", { required: true })}
                      type="text"
                      placeholder="product short msg"
                      className="input input-bordered w-full my-2"
                    />
                  </div>
                </div>
                {/* size & category input */}
                <div className=" lg:flex gap-6 mb-6">
                  <div className=" lg:w-1/3">
                    <label>Category</label> <br />
                    <select
                      {...register("category", { required: true })}
                      className="select select-bordered w-full my-2"
                    >
                      <option>select product category</option>
                      <option value="Travel Bag">Travel Bag</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Sale">Sale</option>
                      <option value="New arrivals">New arrivals</option>
                      <option value="Backpacks">Backpacks</option>
                    </select>
                  </div>
                  <div className=" lg:w-1/3">
                    <label>Size</label> <br />
                    <select
                      {...register("size", { required: true })}
                      className="select select-bordered w-full my-2"
                    >
                      <option>select product size</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                  <div className=" lg:w-1/3">
                    <label>Product Type</label> <br />
                    <select
                      {...register("type", { required: true })}
                      className="select select-bordered w-full my-2"
                    >
                      <option>select product type</option>
                      <option value="women">Women</option>
                      <option value="man">Man</option>
                      <option value="kids">Kids</option>
                      <option value="sport">Sport</option>
                      <option value="beauty">Beauty</option>
                    </select>
                  </div>
                </div>

                {/*  description*/}
                <div className="mb-6 ">
                  <label>Description</label> <br />
                  <textarea
                    {...register("description", { required: true })}
                    className="w-full textarea textarea-bordered my-2"
                    placeholder="Write product description"
                  ></textarea>
                </div>
                {/* Media or img upload */}
                <div className="my-5">
                  <h5 className="text-xl mb-3">Media</h5>
                  <div className="w-full border-dashed border-2 border-blue rounded-lg py-32 my-2 p-10">
                    {imageURL ? (
                      <div>
                        <img src={imageURL} alt="Preview" className="w-full h-full object-cover" />
                        <div onClick={removeImg} className="btn mt-5 bg-offOrange text-red">
                          remove
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <input
                          onChange={handleImageUpload}
                          type="file"
                          className="file-input file-input-bordered w-full max-w-xs"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-16">
                  <button type="submit" className="btn btn-info text-white">
                    Publish product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
