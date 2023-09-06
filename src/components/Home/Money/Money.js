import { Link } from "react-router-dom";
import money from "../../../images/money.png";

const Money = () => {
  return (
    <div className=" container mx-auto lg:px-32 ">
      <div className="lg:flex gap-10 items-center border-t-2 lg:py-32 p-10">
        <div>
          <h1 className="lg:leading-[80px] pb-10">Earn free money with Karbar</h1>
          <span>With Karbar you will get freeship & savings combo...</span>

          <div className="mt-12 flex gap-10">
            <button className="lg:hero-btn active-btn hover:bg-white hover:text-black">
              <Link to="/kids"> Saving Combo</Link>
            </button>
            <button className="lg:hero-btn2 common-btn hover:bg-black hover:text-white shadow-lg">
              <Link to="/men"> Discover more</Link>
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <img src={money} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Money;
