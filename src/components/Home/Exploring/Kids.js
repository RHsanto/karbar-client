import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Kids = () => {
  const product = [
    {
      id: "02",
      name: "Shoes",
      product: "316",
      bgColor: "#FEE2E2",
      proImg: "https://i.ibb.co/RH3BB6W/2.png",
      bgImg: "https://i.ibb.co/wz82VQP/2.png",
    },
    {
      id: "04",
      name: "Cycling Jersey",
      product: "214",
      bgColor: "#FEF9C3",
      proImg: "https://i.ibb.co/VmCj2QV/5.png",
      bgImg: "https://i.ibb.co/ZW4Yd6G/3.png",
    },
    {
      id: "06",
      name: "Car Coat",
      product: "214",
      bgColor: "#DFE5ED",
      proImg: "https://i.ibb.co/dDG7CYk/6.png",
      bgImg: "https://i.ibb.co/SPn0F0q/5.png",
    },

    {
      id: "08",
      name: "Shoes",
      product: "316",
      bgColor: "#FEE2E2",
      proImg: "https://i.ibb.co/RH3BB6W/2.png",
      bgImg: "https://i.ibb.co/wz82VQP/2.png",
    },

    {
      id: "10",
      name: "Cycling Jersey",
      product: "214",
      bgColor: "#FEF9C3",
      proImg: "https://i.ibb.co/VmCj2QV/5.png",
      bgImg: "https://i.ibb.co/ZW4Yd6G/3.png",
    },

    {
      id: "12",
      name: "Car Coat",
      product: "214",
      bgColor: "#DFE5ED",
      proImg: "https://i.ibb.co/dDG7CYk/6.png",
      bgImg: "https://i.ibb.co/SPn0F0q/5.png",
    },
  ];

  return (
    <div className="lg:grid grid-cols-3 lg:px-32 p-10  gap-10">
      {product?.map(data => (
        <div
          key={data?.id}
          className="relative rounded-3xl shadow-lg
        bg-white p-9 hover:shadow-2xl cursor-pointer lg:mb-0 mb-6"
        >
          <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
            <img src={data?.bgImg} alt="img" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-offBlue">
                <img src={data?.proImg} alt="img" />
              </div>
              <p>{data?.product} products</p>
            </div>
            <div className="py-16">
              <p>Manufacturer</p>
              <h3 className="mt-2">{data?.name}</h3>
            </div>
            <Link to="/kids" className="">
              <button className=" hover:text-blue text-left font-bold flex items-center gap-2">
                See Collection <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kids;
