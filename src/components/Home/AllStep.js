import React from "react";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import step4 from "../../images/step4.png";

const allStep = [
  {
    id: 1,
    image: step1,
    bgColor: "bg-offOrange",
    title: "Filter & Discover",
    description: "Smart filtering and suggestions make it easy to find",
  },
  {
    id: 2,
    image: step2,
    bgColor: "bg-offBlue",
    title: "Add to bag",
    description: "Easily select the correct items and add them to the cart",
  },
  {
    id: 3,
    image: step3,
    bgColor: "bg-secondary",
    title: "Fast shipping",
    description: "The carrier will confirm and ship quickly to you",
  },
  {
    id: 4,
    image: step4,
    bgColor: "bg-violet",
    title: "Enjoy the product",
    description: "Have fun and enjoy your 5-star quality products",
  },
];

const AllStep = () => {
  return (
    <div className={` lg:px-32 container mx-auto `}>
      <div className="lg:p-0 p-5 my-8">
        <h3 className="pb-3">Product Delivery Process</h3>
        <span className="leading-7">
          Swift, secure, and transparent – our product delivery promises a seamless journey from
          order <br />
          to your doorstep. Your satisfaction is our priority at every step!
        </span>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 items-center lg:py-32 mb-32 lg:border-y-2  ">
        {allStep.map(step => (
          <div key={step?.id}>
            <div className="w-[140px] h-[140px]  mx-auto mb-3">
              <img src={step?.image} alt={`Step ${step?.id}`} />
            </div>
            <div className="text-center">
              <p>
                <span className={`rounded-full px-2 py-1 ${step?.bgColor}`}>step {step?.id}</span>
              </p>
              <h5 className="py-3">{step?.title}</h5>
              <p>{step?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStep;
