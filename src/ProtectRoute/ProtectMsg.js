import React from "react";
import secure from "../../src/images/security.jpg";
import { Link } from "react-router-dom";
const ProtectMsg = () => {
  return (
    <div className="container mx-auto text-center p-20 ">
      <div className="mb-3 flex justify-between ">
        <h3> Protect Route (Only Admin can access )</h3>
        <Link to="/">
          <button className="btn btn-info text-white">got to Home page</button>
        </Link>
      </div>
      <img className="w mx-auto" src={secure} alt="secure" />
    </div>
  );
};

export default ProtectMsg;
