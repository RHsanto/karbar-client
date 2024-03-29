/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/Slice/AuthSlice";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const Login = () => {
  const { signInUsingGoogle, loginUser, error, GoogleUser } = useFirebase();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // Google Auth
  const handleGoogle = e => {
    signInUsingGoogle().then(result => {
      const user = result?.user;
      GoogleUser(user.email, user.displayName);
      // console.log(user);
      dispatch(login());
      navigate(redirect_uri);
    });
  };
  // login information
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSignIn = e => {
    loginUser(email, password, location);
    e.preventDefault();
    dispatch(login());
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:px-32 py-20 ">
        <h2 className="text-center">Login </h2>
        <div className="mt-20 w-96 mx-auto">
          <button
            onClick={handleGoogle}
            className="flex justify-center items-center gap-5 bg-[#e6f2fa] p-3 rounded-lg w-full font-bold mb-5"
          >
            {" "}
            <FcGoogle className="text-2xl " /> Continue with Google
          </button>
          <div className="text-center">OR</div>
          <form onSubmit={handleSignIn}>
            <p className="text-red text-center">{error}</p>
            <div className="mt-16 ">
              <div className="mb-8">
                <label htmlFor="Email">Email address </label>
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full mt-2"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="Password">Password </label>
                <input
                  onBlur={handlePasswordChange}
                  type="text"
                  className="input input-bordered w-full mt-2"
                  required
                />
              </div>
              <button type="submit" className="bg-black text-white w-full p-3 rounded-full mb-5">
                Continue
              </button>
              <div className="flex justify-center">
                <span>New user ?</span>
                <Link to="/signup" className="text-blue">
                  Create an account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
