import React from "react";
import DashTemplate from "./DashTemplate";
import DashHeader from "./DashHeader";
import OrderChart from "./Orders/OrderChart";
import useSWR from "swr";
import { FaFileInvoiceDollar, FaLayerGroup, FaShoppingCart, FaUserAlt } from "react-icons/fa";
// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const MainDashboard = () => {
  const { data: orderList } = useSWR("https://dokan-backend.onrender.com/orders", fetcher);
  const { data: products } = useSWR("https://dokan-backend.onrender.com/products", fetcher);

  // Calculate total quantity of products
  const totalSale = orderList?.reduce(
    (acc, order) => acc + order.orders.reduce((acc, product) => acc + product.quantity, 0),
    0
  );

  // Calculate  income
  const income = orderList?.reduce(
    (acc, order) => acc + order.orders.reduce((acc, product) => acc + product.price, 0),
    0
  );

  // Calculate Total Income
  const tax = 0.1 * income;
  const shipping = orderList?.length * 56;
  const totalIncome = income + shipping + tax;

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
            <div className="p-6 bg-blue rounded flex justify-between">
              <div>
                <h4>Total Sales</h4>
                <h4 className="mt-2">{totalSale}</h4>
              </div>
              <div>
                {" "}
                <h2>
                  <FaShoppingCart />
                </h2>
              </div>
            </div>
            <div className="p-5 bg-red rounded flex justify-between">
              <div>
                <h4> Customers</h4>
                <h4 className="mt-2">{orderList?.length}</h4>
              </div>
              <div>
                <h2>
                  {" "}
                  <FaUserAlt />
                </h2>
              </div>
            </div>
            <div className="p-5 bg-green rounded flex justify-between">
              <div>
                {" "}
                <h4>Products</h4>
                <h4 className="mt-2">{products?.length}</h4>
              </div>
              <div>
                <h2>
                  <FaLayerGroup />
                </h2>
              </div>
            </div>
            <div className="p-5 bg-yellow rounded flex justify-between">
              <div>
                {" "}
                <h4>Total Income</h4>
                <h4 className="mt-2">${totalIncome.toFixed(2)}</h4>
              </div>
              <div>
                <h2>
                  <FaFileInvoiceDollar />
                </h2>
              </div>
            </div>
          </div>
          {/* Chat */}
          <div className="bg-white p-10 m-10 ">
            <div className="border ">
              {/* Other components in Customer.js */}
              <OrderChart orderList={orderList || []} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
