import React from "react";
import { BsSearch } from "react-icons/bs";
import HI from "../../images/test.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="mx-4 lg:mx-0">
      <div
        className="container lg:mx-auto lg:px-32  bg-[#FEE2E2]
     rounded-lg mb-20 lg:mb-10 "
      >
        <div className="mt-5 lg:h-[600px] lg:grid grid-cols-2 items-center gap-10 lg:p-0 p-10">
          <div>
            <h4>In this season, find the best 🔥</h4>
            <h1 className="my-10 lg:leading-[75px]">
              Exclusive collection <br />
              for everyone
            </h1>
            <button className="hero-btn flex items-center gap-3 mb-10 lg:mb-0">
              <Link to="/women">Explore Now</Link>
              <BsSearch />
            </button>
          </div>
          <div>
            <img src={HI} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
