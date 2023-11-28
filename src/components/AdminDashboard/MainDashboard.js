import React from "react";
import DashTemplate from "./DashTemplate";
import DashHeader from "./DashHeader";

const MainDashboard = () => {
  return (
    <>
      <div className="lg:grid grid-cols-6 ">
        <div className="cols-span-1 m-5">
          <DashTemplate />
        </div>
        <div className="pt-5 lg:pt-0 m-10 bg-slate-100 col-span-5 rounded-lg ">
          <div>
            <DashHeader />
          </div>
          {/* Four Card Items */}
          <div className=" lg:grid grid-cols-4 lg:gap-5 flex flex-col gap-6  m-10 text-white">
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
      </div>
    </>
  );
};

export default MainDashboard;
