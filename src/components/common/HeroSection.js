import React from "react";
import { BsSearch } from "react-icons/bs";
import HI from "../../images/hi.png";
const HeroSection = () => {
  return (
    <div
      className="container mx-auto lg:px-32  bg-[#FEE2E2]
     rounded-lg mb-20"
    >
      <div className="lg:grid grid-cols-2 items-center gap-10 lg:p-0 p-10">
        <div>
          <h5>In this season, find the best 🔥</h5>
          <h1 className="my-10 lg:leading-[75px]">
            Exclusive collection <br />
            for everyone
          </h1>
          <button className="hero-btn flex items-center gap-3">
            Explore Now <BsSearch />
          </button>
        </div>
        <div>
          <img src={HI} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
