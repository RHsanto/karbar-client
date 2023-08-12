import dep1 from "../../images/experts/department1.png";
import dep2 from "../../images/experts/department2.png";
import dep3 from "../../images/experts/department3.png";
import dep4 from "../../images/experts/department4.png";

const Department = () => {
  return (
    <div className="container mx-auto lg:px-32">
      <div>
        <h3 className="mb-14 lg:pl-0 pl-5">Shop by department</h3>
        <div className="lg:grid grid-cols-4 gap-6 p-5 lg:p-0">
          <div className="cursor-pointer ">
            <div className="bg-offBlue rounded-2xl hover:shadow">
              <img src={dep4} alt="img" />
            </div>
            <div className="text-center py-5">
              <h6 className="text-xl font-semibold">Sports kit</h6>
              <p>35+ products</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="bg-offBlue rounded-2xl hover:shadow">
              <img src={dep3} alt="img" />
            </div>
            <div className="text-center py-5">
              <h6 className="text-xl font-semibold">Pet Food</h6>
              <p>40+ products</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="bg-offBlue rounded-2xl hover:shadow">
              <img src={dep2} alt="img" />
            </div>
            <div className="text-center py-5">
              <h6 className="text-xl font-semibold">Beauty Products</h6>
              <p>99+ products</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="bg-offBlue rounded-2xl hover:shadow">
              <img src={dep1} alt="img" />
            </div>
            <div className="text-center py-5">
              <h6 className="text-xl font-semibold">Travel kit</h6>
              <p>25+ products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
