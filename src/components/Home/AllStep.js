import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import step4 from "../../images/step4.png";

const AllStep = () => {
  return (
    <div className={` my-32 lg:px-32 container mx-auto`}>
      <div className="lg:grid grid-cols-4 gap-10 items-center ">
        <div>
          <div className="w-[140px] h-[140px]  mx-auto mb-3">
            <img src={step1} alt="img" />
          </div>
          <div className="text-center">
            <p>
              <span className=" bg-offOrange px-2 py-1 rounded-full">step 1</span>
            </p>
            <h5 className="py-3">Filter & Discover</h5>
            <p>Smart filtering and suggestions make it easy to find</p>
          </div>
        </div>
        <div>
          <div className="w-[140px] h-[140px]  mx-auto mb-3">
            <img src={step2} alt="img" />
          </div>
          <div className="text-center">
            <p>
              <span className=" bg-offBlue px-2 py-1 rounded-full">step 2</span>
            </p>
            <h5 className="py-3">Add to bag</h5>
            <p>Easily select the correct items and add them to the cart</p>
          </div>
        </div>
        <div>
          <div className="w-[140px] h-[140px]  mx-auto mb-3">
            <img src={step3} alt="img" />
          </div>
          <div className="text-center">
            <p>
              <span className=" bg-secondary px-2 py-1 rounded-full">step 3</span>
            </p>
            <h5 className="py-3">Fast shipping</h5>
            <p>The carrier will confirm and ship quickly to you</p>
          </div>
        </div>
        <div>
          <div className="w-[140px] h-[140px]  mx-auto mb-3">
            <img src={step4} alt="img" />
          </div>
          <div className="text-center">
            <p>
              <span className=" bg-violet px-2 py-1 rounded-full">step 4</span>
            </p>
            <h5 className="py-3">Enjoy the product</h5>
            <p>Have fun and enjoy your 5-star quality products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStep;
