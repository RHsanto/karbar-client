import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import { toast, ToastContainer } from "react-toastify";

const Add = () => {
  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post("  https://dokan-backend.onrender.com/products", data).then(res => {
      if (res.data.insertedId) {
        toast.success("Add Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            {...register("productImg")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="productImg"
          />{" "}
          <br />
          <input
            {...register("name")}
            required
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="name"
          />
          <br />
          <input
            {...register("description")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="description"
          />
          <br />
          <input
            {...register("message")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="message"
          />
          <br />
          <input
            {...register("reviews")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="reviews"
          />
          <br />
          <input
            {...register("star")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="star"
          />
          <br />
          <input
            {...register("price")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="price"
          />
          <br />
          <input
            {...register("color")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="color"
          />
          <br />
          <input
            {...register("category")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="category"
          />
          <br />
          <input
            {...register("size")}
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="size"
          />
          <br />
          <input
            {...register("type")}
            required
            type="text"
            className="border outline-none p-4 w-2/5 mb-5"
            id="floatingInput"
            placeholder="type"
          />
          <br />
        </div>

        <button type="submit" className="active-btn">
          Submit
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default Add;
