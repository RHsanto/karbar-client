import React from "react";
import secure from "../../src/images/security.jpg";
import { Link } from "react-router-dom";
const ProtectMsg = () => {
  return (
    <div className="container mx-auto text-center py-10 ">
      <div className="mb-3 grid grid-cols-2 items-center ">
        <div>
          <img className=" mx-auto " src={secure} alt="secure" />
        </div>
        <div>
          <h3> Protect Route (Only Admin can access )</h3>
          <Link to="/">
            <button className="btn btn-info text-white mt-5">got to Home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProtectMsg;
