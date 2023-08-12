import OneBox from "./CardBoxs/OneBox";
import TwoBox from "./CardBoxs/TwoBox";
import ThreeBox from "./CardBoxs/ThreeBox";
import FourBox from "./CardBoxs/FourBox";

const NewArrivals = () => {
  return (
    <div className="container mx-auto lg:px-32">
      <h3 className="lg:p-0 p-5 my-10">
        New Arrivals.<span className="opacity-50"> REY backpacks & bags </span>
      </h3>
      <div className="border-b-2 grid lg:grid-cols-4 gap-10 lg:py-16 py-5 m-5 lg:m-0">
        <OneBox />
        <TwoBox />
        <ThreeBox />
        <FourBox />
      </div>
    </div>
  );
};

export default NewArrivals;
