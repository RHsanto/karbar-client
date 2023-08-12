import React, { useState } from "react";
import Women from "./Women";
import Man from "./Man";
import Kids from "./Kids";
import Sports from "./Sports";
import Beauty from "./Beauty";
import { AiOutlineCrown, AiOutlineMan, AiOutlineSmile, AiOutlineWoman } from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";

const Explore = () => {
  const [select, setSelect] = useState("Women");

  const handleWomen = () => {
    setSelect("Women");
  };

  const handleMan = () => {
    setSelect("Man");
  };
  const handleKids = () => {
    setSelect("Kids");
  };
  const handleSports = () => {
    setSelect("Sports");
  };
  const handleBeauty = () => {
    setSelect("Beauty");
  };

  return (
    <div className="py-20 container mx-auto bg-bgWhite  rounded-2xl">
      <h2 className="text-center">Start exploring.</h2>
      {/*selector  */}
      <div
        className="hidden lg:flex  p-[6px] mt-10 bg-white w-[765px] mx-auto
        shadow-lg rounded-full "
      >
        <button
          onClick={handleWomen}
          className={`${select === "Women" && "bg-black text-white"}
           py-3 px-10  rounded-full flex items-center gap-1`}
        >
          <AiOutlineWoman className="text-2xl" /> Women
        </button>
        <button
          onClick={handleMan}
          className={`${select === "Man" && "bg-black text-white"}
           py-3 px-10  rounded-full flex items-center gap-1`}
        >
          <AiOutlineMan className="text-2xl" /> Man
        </button>
        <button
          onClick={handleKids}
          className={`${select === "Kids" && "bg-black text-white"}
           py-3 px-10  rounded-full flex items-center gap-1`}
        >
          <AiOutlineSmile className="text-2xl" /> Kids
        </button>
        <button
          onClick={handleSports}
          className={`${select === "Sports" && "bg-black text-white"}
           py-3 px-10  rounded-full flex items-center gap-1`}
        >
          <BiDumbbell className="text-2xl" /> Sports
        </button>
        <button
          onClick={handleBeauty}
          className={`${select === "Beauty" && "bg-black text-white"}
           py-3 px-10  rounded-full flex items-center gap-1`}
        >
          <AiOutlineCrown className="text-2xl" /> Beauty
        </button>
      </div>
      {/* for  small device  */}
      <div
        className="lg:hidden flex 
          mt-10 bg-white  mx-5 
        shadow-lg rounded-full p-1 "
      >
        <button
          onClick={handleWomen}
          className={`${select === "Women" && "bg-black text-white"}
           rounded-full py-1 px-3 flex items-center`}
        >
          <AiOutlineWoman /> <small> Women</small>
        </button>
        <button
          onClick={handleMan}
          className={`${select === "Man" && "bg-black text-white"}
           rounded-full py-1 px-4 flex items-center gap-1`}
        >
          <AiOutlineMan /> <small>Man</small>
        </button>
        <button
          onClick={handleKids}
          className={`${select === "Kids" && "bg-black text-white"}
            rounded-full py-1 px-4 flex items-center gap-1`}
        >
          <AiOutlineSmile /> <small> Kids</small>
        </button>
        <button
          onClick={handleSports}
          className={`${select === "Sports" && "bg-black text-white"}
           rounded-full py-1 px-3 flex items-center gap-1`}
        >
          <BiDumbbell /> <small>Sports</small>
        </button>
      </div>
      {/* selector items */}
      {select === "Women" && <Women />}
      {select === "Man" && <Man />}
      {select === "Kids" && <Kids />}
      {select === "Sports" && <Sports />}
      {select === "Beauty" && <Beauty />}
    </div>
  );
};

export default Explore;
