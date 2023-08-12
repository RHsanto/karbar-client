import ex1 from "../../../images/experts/1.png";
import ex2 from "../../../images/experts/2.png";
import ex3 from "../../../images/experts/3.png";
import ex4 from "../../../images/experts/4.png";
import ex5 from "../../../images/experts/5.png";
import ex6 from "../../../images/experts/6.png";
import ex7 from "../../../images/experts/7.png";
import ex8 from "../../../images/experts/8.png";
import ex9 from "../../../images/experts/9.png";
import ex10 from "../../../images/experts/10.png";
import ex11 from "../../../images/experts/11.png";
import ex12 from "../../../images/experts/12.png";
import { AiFillStar } from "react-icons/ai";

const OurExperts = () => {
  return (
    <div className="container mx-auto lg:p-32 my-20">
      <h3 className="mb-14 lg:pl-0 pl-5">Chosen by our experts</h3>
      <div className="lg:grid grid-cols-3 gap-10 lg:p-0 p-5 cursor-pointer">
        <div>
          <div className="rounded-2xl bg-[#F3F4F6]">
            <img src={ex1} alt="img" />
          </div>
          <div className="grid grid-cols-3 py-3 gap-3">
            <img src={ex2} alt="img" />
            <img src={ex3} alt="img" />
            <img src={ex4} alt="img" />
          </div>
          <div className="my-2 flex justify-between items-center">
            <div>
              <h4>Suede Bomber Jacket</h4>
              <p className="mt-2 flex items-center gap-2">
                <span>Orange</span> |{" "}
                <span className="flex items-center gap-1">
                  <AiFillStar className="text-yellow" /> 4.5 (62 reviews)
                </span>
              </p>
            </div>
            <div>
              <button className="text-green font-bold border-2 px-2 rounded-lg border-green">
                $45.00
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-[#F3F4F6]">
            <img src={ex5} alt="img" />
          </div>
          <div className="grid grid-cols-3 py-3 gap-3">
            <img src={ex6} alt="img" />
            <img src={ex7} alt="img" />
            <img src={ex8} alt="img" />
          </div>
          <div className="my-2 flex justify-between items-center">
            <div>
              <h4>Downtown Pet Tote </h4>
              <p className="mt-2 flex items-center gap-2">
                <span>Black and Orange</span> |{" "}
                <span className="flex items-center gap-1">
                  <AiFillStar className="text-yellow" /> 4.3 (262 reviews)
                </span>
              </p>
            </div>
            <div>
              <button className="text-green font-bold border-2 px-2 rounded-lg border-green">
                $95.00
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-[#F3F4F6]">
            <img src={ex9} alt="img" />
          </div>
          <div className="grid grid-cols-3 py-3 gap-3">
            <img src={ex10} alt="img" />
            <img src={ex11} alt="img" />
            <img src={ex12} alt="img" />
          </div>
          <div className="my-2 flex justify-between items-center">
            <div>
              <h4>Cadre Leather Sneakers </h4>
              <p className="mt-2 flex items-center gap-2">
                <span>2 Sizes Available </span> |{" "}
                <span className="flex items-center gap-1">
                  <AiFillStar className="text-yellow" /> 4.1 (222 reviews)
                </span>
              </p>
            </div>
            <div>
              <button className="text-green font-bold border-2 px-2 rounded-lg border-green">
                $44.00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
