import React from "react";
import DashTemplate from "./DashTemplate";
import DashHeader from "./DashHeader";

const Customer = () => {
  return (
    <div className="lg:grid grid-cols-6">
      <div className="cols-span-1 m-5">
        <DashTemplate />
      </div>
      <div className="pt-5 lg:pt-0 m-10 bg-slate-100 col-span-5 rounded-lg">
        <div>
          <DashHeader />
        </div>
        <div>
          <h1>Customer</h1>
        </div>
      </div>
    </div>
  );
};

export default Customer;
