import React from "react";
import cancelImg from "../../../../images/er.jpg";
const Failed = () => {
  return (
    <div className="container mx-auto lg:px-32 px-10 w-2/4">
      <h3 className="text-center my-10 text-red">Payment Failed !</h3>
      <img src={cancelImg} alt="" className="w-" />
    </div>
  );
};

export default Failed;
