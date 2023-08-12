import React, { useState } from "react";
import img from "../../../images/products/1.png";
import img2 from "../../../images/products/2.png";
import img3 from "../../../images/products/3.png";
import img4 from "../../../images/products/4.png";
import img5 from "../../../images/products/5.png";

import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const OneBox = () => {
  const [love, setLove] = useState(1);
  const [catColor, setCatColor] = useState("red");
  const handleLove = () => {
    setLove(1);
  };
  const removeLove = () => {
    setLove(-1);
  };

  // category color selector
  const yellowBtn = () => {
    setCatColor("yellow");
  };
  const blueBtn = () => {
    setCatColor("blue");
  };
  const redBtn = () => {
    setCatColor("red");
  };
  const greenBtn = () => {
    setCatColor("green");
  };
  const blackBtn = () => {
    setCatColor("black");
  };

  return (
    <div>
      <div className=" imagesec cursor-pointer bg-bgWhite rounded-2xl relative lg:h-[300px]">
        {catColor === "yellow" && <img src={img} alt="img" />}
        {catColor === "blue" && <img src={img2} alt="img" />}
        {catColor === "red" && <img src={img3} alt="img" />}
        {catColor === "green" && <img src={img4} alt="img" />}
        {catColor === "black" && <img src={img5} alt="img" />}

        {love === 1 ? (
          <div
            onClick={removeLove}
            className="absolute shadow-lg p-[10px] bg-white rounded-full top-3 right-3 cursor-pointer"
          >
            <AiOutlineHeart className="text-2xl" />
          </div>
        ) : (
          <div
            onClick={handleLove}
            className="absolute shadow-lg p-[10px] text-red bg-white rounded-full top-3 right-3 cursor-pointer"
          >
            <AiFillHeart className="text-2xl" />
          </div>
        )}
      </div>
      {/* add color category */}
      <div className="product_info  p-3 relative">
        <div className="color_category gap-2 flex py-3">
          <div
            className={`
                ${catColor === "red" && "border-2 border-red"}            
                  rounded-full  p-[1px] w-[26px] h-[26px]`}
          >
            <button onClick={redBtn} className="w-[20px] h-[20px] bg-red rounded-full "></button>
          </div>
          <div
            className={`${catColor === "yellow" && "border-2 border-yellow"}
                 rounded-full  p-[1px] w-[26px] h-[26px]`}
          >
            <button
              onClick={yellowBtn}
              className="w-[20px] h-[20px] bg-yellow rounded-full "
            ></button>
          </div>
          <div
            className={`
                ${catColor === "blue" && "border-2 border-blue"}          
                rounded-full  p-[1px] w-[26px] h-[26px]`}
          >
            <button onClick={blueBtn} className="w-[20px] h-[20px] bg-blue rounded-full "></button>
          </div>

          <div
            className={`${
              catColor === "green" && "border-2 border-green"
            } rounded-full  p-[1px] w-[26px] h-[26px]`}
          >
            <button
              onClick={greenBtn}
              className="w-[20px] h-[20px] bg-green rounded-full "
            ></button>
          </div>
          <div
            className={` ${catColor === "black" && "border-2 border-black"}
                  rounded-full  p-[1px] w-[26px] h-[26px]`}
          >
            <button
              onClick={blackBtn}
              className="w-[20px] h-[20px] bg-black rounded-full "
            ></button>
          </div>
        </div>
        <div className="product_details py-3">
          <h5>Leather Gloves</h5>
          <p className="pt-1">Perfect mint green</p>
          <div className="price_review py-5 flex justify-between">
            <button className="text-green font-bold border-2 px-2 rounded-lg border-green">
              $45.00
            </button>
            <p className="flex items-center">
              <AiFillStar className="text-yellow" /> 4.5 (62 reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBox;
