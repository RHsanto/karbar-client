import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container mx-auto lg:px-32 py-20 ">
      <h2 className="text-center">Signup </h2>
      <div className="mt-20 w-96 mx-auto">
        <button className="flex justify-center items-center gap-5 bg-[#e6f2fa] p-3 rounded-lg w-full font-bold mb-5">
          {" "}
          <FcGoogle className="text-2xl " /> Continue with Google
        </button>
        <div className="text-center">OR</div>
        <div className="mt-16 ">
          <div className="mb-8">
            <label htmlFor="name">Full name </label>
            <input type="text" placeholder="example" className="input input-bordered w-full mt-2" />
          </div>
          <div className="mb-8">
            <label htmlFor="Email">Email address </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full mt-2"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="Password">Password </label>
            <input type="text" className="input input-bordered w-full mt-2" />
          </div>
          <button className="bg-black text-white w-full p-3 rounded-full mb-5">Continue</button>
          <div className="flex justify-center">
            <span>Already have an account ?</span>
            <Link to="/login" className="text-blue">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
