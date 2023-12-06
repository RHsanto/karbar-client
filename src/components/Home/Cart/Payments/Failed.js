import React from "react";
import cancelImg from "../../../../images/er.jpg";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";
const Failed = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto lg:px-32 px-10 w-2/4">
        <h3 className="text-center my-10 text-red">Payment Failed !</h3>
        <img src={cancelImg} alt="" className="w-" />
      </div>
      <Footer />
    </section>
  );
};

export default Failed;
