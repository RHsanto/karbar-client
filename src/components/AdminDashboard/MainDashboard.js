import React from "react";

const MainDashboard = () => {
  return (
    <div className="m-10">
      {/* Four Card Items */}
      <div className="grid grid-cols-4 gap-5 my-10 text-white">
        <div className="p-5 bg-blue rounded">
          <h4>Sales</h4>
          <h3 className="mt-2">$1454</h3>
        </div>
        <div className="p-5 bg-red rounded">
          <h4>New Order</h4>
          <h3 className="mt-2">$2366</h3>
        </div>
        <div className="p-5 bg-green rounded">
          <h4>Total Profit</h4>
          <h3 className="mt-2">$1254</h3>
        </div>
        <div className="p-5 bg-yellow rounded">
          <h4>Income</h4>
          <h3 className="mt-2">$1454</h3>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
