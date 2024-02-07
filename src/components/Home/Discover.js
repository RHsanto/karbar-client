import { Link } from "react-router-dom";

const Discover = () => {
  const discoData = [
    { id: "03", img: "https://i.ibb.co/mbrRGry/4.png", bg: "#FEE2E2" },
    { id: "01", img: "https://i.ibb.co/thz2GFv/3.png", bg: " #EFF6FF" },
    { id: "04", img: "https://i.ibb.co/6g0sSTj/2.png", bg: "#E3FFE6" },
  ];
  return (
    <div className="container mx-auto lg:px-32">
      <h3 className="lg:pb-10 pb-20 lg:pt-14 lg:px-0 px-5">
        Discover more. <span className="opacity-50">Good things are waiting for you</span>{" "}
      </h3>

      {/*  */}
      <div>
        <div className="grid-cols-3 lg:grid ">
          {discoData?.map(data => (
            <div key={data.id} className="mb-10">
              <div
                style={{ background: data.bg }}
                className={`cursor-pointer mx-3 flex justify-between p-5  rounded-2xl  lg:h-56`}
              >
                <div className="relative">
                  <p>Explore new arrivals</p>
                  <h4 className="pt-2">Shop the latest from top brands</h4>

                  <Link to="/men" className="">
                    <button className="common-btn absolute bottom-0 hover:bg-offWhite hover:shadow-lg">
                      Show me all
                    </button>
                  </Link>
                </div>
                <div>
                  <img src={data?.img} alt="img" className="w-52 " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
