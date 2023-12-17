import { Link } from "react-router-dom";
import img1 from "../../images/experts/department1.png";
import img2 from "../../images/experts/department2.png";
import img3 from "../../images/experts/department3.png";
import img4 from "../../images/experts/department4.png";

const Department = () => {
  const items = [
    { id: 1, title: "Sports kit", img: img1, total: 36 },
    { id: 2, title: "Beauty Products", img: img2, total: 52 },
    { id: 3, title: "Pet Food", img: img3, total: 45 },
    { id: 4, title: "Travel kit", img: img4, total: 12 },
  ];
  return (
    <div className="container mx-auto lg:px-32">
      <div>
        <h3 className="mb-14 lg:pl-0 pl-5">Shop by department</h3>
        <div className="lg:grid grid-cols-4 gap-6 p-5 lg:p-0">
          {items.map(item => (
            <Link to="/men">
              <div key={item.id}>
                <div className="bg-offBlue rounded-2xl hover:bg-hover_offBlue">
                  <img src={item.img} alt="img" />
                </div>
                <div className="text-center py-5">
                  <h6 className="text-xl font-semibold">{item.title}</h6>
                  <p>{item.total}+ products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;
