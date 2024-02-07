import { Link } from "react-router-dom";
import img from "../../images/chil.png";

const SpecialOffer = () => {
  return (
    <div className="container mx-auto lg:px-32   my-20">
      <div className="p-10 lg:p-0 grid lg:grid-cols-2 md:grid-cols-2 gap-10  items-center bg-[#FEFCE8] rounded-2xl">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="lg:p-10 p-4">
          <h4>Karbar</h4>
          <h1 className="my-10 lg:leading-[80px] md:text-3xl">Special offer in kids products</h1>
          <div className="my-10">
            <span>
              Fashion is a form of self-expression and autonomy at a particular period and place.
            </span>
          </div>
          <button className="active-btn">
            <Link to="/kids">Discover More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
