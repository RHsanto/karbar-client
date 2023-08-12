/* eslint-disable react/no-unescaped-entities */

import img1 from "../../images/slider/1.png";
import img2 from "../../images/slider/2.png";
import img3 from "../../images/slider/3.png";

const Testimonial = () => {
  return (
    <div className="container mx-auto p-32 text-center">
      <h3 className="mb-3">Good news from far away 🥇</h3>
      <h6 className="text-xl">Let's see what people think of Dokan</h6>
      <div className="flex justify-between items-center px-32 py-10">
        <img src={img2} alt="" />
        <img src={img1} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
