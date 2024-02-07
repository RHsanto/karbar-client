import React, { useState } from "react";
import img from "../../../images/products/1.png";
import img2 from "../../../images/products/2.png";
import img3 from "../../../images/products/3.png";
import img4 from "../../../images/products/4.png";
import img5 from "../../../images/products/5.png";

import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const OneBox = () => {
  const [love, setLove] = useState(1);
  const [catColor, setCatColor] = useState("yellow");

  const handleLove = () => {
    setLove(1);
  };

  const removeLove = () => {
    setLove(-1);
  };

  const handleColorChange = color => {
    setCatColor(color);
  };

  const colorImages = {
    yellow: img2,
    blue: img,
    red: img4,
    green: img3,
    black: img5,
  };

  return (
    <div>
      <div className="hover_img cursor-pointer bg-bgWhite rounded-2xl relative lg:h-[300px] md:h-[340px]">
        <img src={colorImages[catColor]} alt="img" />

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
      <div className="product_info p-3 relative">
        <div className="color_category gap-2 flex py-3">
          {["yellow", "blue", "red", "green", "black"].map(color => (
            <div
              key={color}
              className={`${
                catColor === color && "border-2 border-" + color
              } rounded-full p-[1px] w-[26px] h-[26px]`}
            >
              <button
                onClick={() => handleColorChange(color)}
                className={`w-[20px] h-[20px] bg-${color} rounded-full`}
              ></button>
            </div>
          ))}
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
