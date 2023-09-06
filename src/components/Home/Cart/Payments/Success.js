import React from "react";
import cartImg from "../../../../images/c3.jpg";
const Success = () => {
  return (
    <div className="container mx-auto lg:px-32 px-10 w-2/4">
      <h3 className="text-center my-10 text-green">Payment Success &#x2714;</h3>
      <img src={cartImg} alt="" className="w-" />
    </div>
  );
};

export default Success;
