/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser, error, signInUsingGoogle } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  // google authentication

  const handleGoogle = e => {
    signInUsingGoogle().then(result => {
      const user = result.user;
      navigate(redirect_uri);
    });
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSignUpSubmit = e => {
    registerUser(name, email, password);
    e.preventDefault();
  };

  return (
    <div className="container mx-auto lg:px-32 py-20 ">
      <h2 className="text-center">Signup </h2>
      <div className="mt-20 w-96 mx-auto">
        <button
          onClick={handleGoogle}
          className="flex justify-center items-center gap-5 bg-[#e6f2fa] p-3 rounded-lg w-full font-bold mb-5"
        >
          {" "}
          <FcGoogle className="text-2xl " /> Continue with Google
        </button>
        <div className="text-center">OR</div>
        <form onSubmit={handleSignUpSubmit}>
          <p className="text-red text-center">{error}</p>
          <div className="mt-16 ">
            <div className="mb-8">
              <label htmlFor="name">Full name </label>
              <input
                onBlur={handleNameChange}
                type="text"
                placeholder="example"
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="Email">Email address </label>
              <input
                onBlur={handleEmailChange}
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="Password">Password </label>
              <input
                onBlur={handlePasswordChange}
                type="text"
                className="input input-bordered w-full mt-2"
              />
            </div>
            <button type="submit" className="bg-black text-white w-full p-3 rounded-full mb-5">
              Continue
            </button>
            <div className="flex justify-center">
              <span>Already have an account ?</span>
              <Link to="/login" className="text-blue">
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
