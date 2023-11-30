import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashTemplate from "../DashTemplate";
import DashHeader from "../DashHeader";
import adminImg from "../../../images/pro.png";
import { MdOutlineShoppingCart } from "react-icons/md";
// const fetcher = (...args) => fetch(...args).then(res => res.json());

const OrderDetails = () => {
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`  https://dokan-backend.onrender.com/order/${id}`)
      .then(response => response.json())
      .then(data => setOrder(data));
  }, [id]);

  // here get orders items
  const data = order?.orders;

  // Calculate subtotal and total
  const calculateSubtotal = () => {
    return data?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 56;
    const tax = 0.1 * subtotal;
    return subtotal + shipping + tax;
  };
  //  orders delete functionality
  // const handleDelete = id => {
  //   const proceed = window.confirm("Are you sure , you want to delete ?");
  //   if (proceed) {
  //     const url = `https://dokan-backend.onrender.com/orderDelete/${id}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     });
  //     // .then(res => res.json())
  //     // .then(data => {
  //     //   mutate("https://dokan-backend.onrender.com/orders");
  //     // });
  //   }
  // };

  return (
    <div className="lg:grid grid-cols-6">
      <div className="cols-span-1 m-5">
        <DashTemplate />
      </div>
      <div
        className="pt-5 lg:pt-0 lg:m-10 m-5
       bg-slate-100 col-span-5 rounded-lg"
      >
        <div>
          <DashHeader />
        </div>
        <div className="m-12 bg-white  p-10">
          <h3>
            {" "}
            <span className="text-gray-400">Order /</span> Order Details
          </h3>
          <div className="my-5 flex justify-between">
            <div>
              <div>
                Order #{order?._id?.slice(2, 7)}{" "}
                <span className="text-green bg-primary py-1 px-2 rounded">Paid</span>
              </div>
              <h6 className="my-2">{order?.date}</h6>
            </div>
            <div>
              <button
                // onClick={() => handleDelete(order?._id)}
                className="btn bg-offOrange text-red"
              >
                Delete Order
              </button>
            </div>
          </div>
          {/* order details table */}
          <div className=" mt-10">
            <div className="lg:grid grid-cols-3 gap-4">
              <div className="col-span-2  border rounded">
                <div className="overflow-x-auto ">
                  <table className="table text-[15px]">
                    {/* head */}
                    <thead className="text-[15px] uppercase ">
                      <tr className="bg-slate-300 text-black">
                        <th>No</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row start */}
                      {data?.map((item, index) => (
                        <tr key={item?._id}>
                          <th>{index + 1}</th>
                          <td>
                            <div className="flex items-center gap-2">
                              <div>
                                <img
                                  className="w-12 bg-gray-200 rounded-lg"
                                  src={item?.productImg}
                                  alt="img"
                                />
                              </div>
                              <div>
                                <div>{item?.name}</div>
                                <div className="text-gray-500">{item?.type} item</div>
                              </div>
                            </div>
                          </td>
                          <td>${item?.price}</td>
                          <td>{item?.quantity}</td>
                          <td>
                            <b>${item?.price * item?.quantity}</b>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* sub total  */}
                <div className="border-t grid justify-end   px-16 py-5">
                  <div className="flex justify-between gap-6">
                    <span> SubTotal :</span> <b>${calculateSubtotal()?.toFixed(2)}</b>
                  </div>
                  <div className="flex justify-between">
                    Shipping : <b>$56</b>
                  </div>
                  <div className="flex justify-between">
                    Tax : <b>${0.15 * calculateSubtotal()?.toFixed(2)}</b>
                  </div>
                  <div className="flex justify-between">
                    Total : <b> ${calculateTotal()?.toFixed(2)}</b>{" "}
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex  flex-col gap-6">
                <div className="border p-6 rounded">
                  <span className="font-bold">Customer details</span>
                  <div className="flex flex-col gap-6 my-5">
                    <div className="flex gap-3">
                      <img className="w-12 rounded-full" src={adminImg} alt="img" />
                      <div>
                        <span>
                          {order?.firstName} {order?.lastName}
                        </span>{" "}
                        <br />
                        <span className="text-gray-400">
                          Customer ID: #{order?._id?.slice(2, 7)}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      {" "}
                      <div className="bg-green p-2 rounded-full">
                        <MdOutlineShoppingCart />
                      </div>{" "}
                      {data?.length} Orders
                    </div>
                    <div>
                      <span className=" font-bold">Contact info</span>
                      <div className="mt-2">
                        <div>Email : {order?.email}</div>
                        <div>Mobile :(+880) {order?.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border p-6 rounded">
                  <span className="font-bold">Shipping address</span>
                  <div className="my-4">
                    <span>{order?.address}</span>
                    <br />
                    <span>{order?.city}</span> <br />
                    <span>{order?.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
