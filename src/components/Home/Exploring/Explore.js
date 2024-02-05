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

  const categories = [
    { label: "Women", icon: <AiOutlineWoman className="text-2xl" /> },
    { label: "Man", icon: <AiOutlineMan className="text-2xl" /> },
    { label: "Kids", icon: <AiOutlineSmile className="text-2xl" /> },
    { label: "Sports", icon: <BiDumbbell className="text-2xl" /> },
    { label: "Beauty", icon: <AiOutlineCrown className="text-2xl" /> },
  ];

  const handleActiveBtn = category => {
    setSelect(category.label);
  };

  return (
    <div className="py-20 container mx-auto bg-bgWhite  rounded-2xl">
      <h2 className="text-center">Start exploring.</h2>
      {/* Selector for large screens */}
      <div className="hidden lg:flex p-[6px] mt-10 bg-white w-[765px] mx-auto shadow-lg rounded-full">
        {categories.map(category => (
          <button
            key={category.label}
            onClick={() => handleActiveBtn(category)}
            className={`${select === category.label && "bg-black text-white"}
              py-3 px-10 rounded-full flex items-center gap-1`}
          >
            {category.icon} {category.label}
          </button>
        ))}
      </div>

      {/* for  small device  */}
      <div
        className="lg:hidden grid grid-cols-5
          mt-10 bg-white  mx-5 
        shadow-lg rounded-full p-1 gap-2 "
      >
        {categories.map(category => (
          <button
            key={category.label}
            onClick={() => handleActiveBtn(category)}
            className={`${select === category.label && "bg-black text-white"}
            rounded-full  flex items-center justify-center px-2 py-1`}
          >
            {/* {category.icon} */}
            <small> {category.label}</small>
          </button>
        ))}
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
