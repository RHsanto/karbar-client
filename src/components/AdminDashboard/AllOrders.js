import React from "react";
import {
  MdDoneAll,
  MdOutlineFreeCancellation,
  MdOutlinePendingActions,
  MdOutlineSmsFailed,
} from "react-icons/md";
import adminImg from "../../images/pro.png";
const AllOrders = () => {
  return (
    <div className="m-10">
      <h3>Order List</h3>
      {/* order record */}
      <div className="grid grid-cols-4 gap-4 border bg-white rounded-lg my-10">
        <div className="flex justify-between p-10 border-r">
          <div>
            <h3>55</h3>
            <h5>Pending Payment</h5>
          </div>
          <div>
            <MdOutlinePendingActions className="text-3xl text-yellow" />
          </div>
        </div>
        <div className="flex justify-between p-10 border-r">
          <div>
            <h3>1214</h3>
            <h5>Completed</h5>
          </div>
          <div>
            <MdDoneAll className="text-3xl text-green" />
          </div>
        </div>
        <div className="flex justify-between p-10 border-r">
          <div>
            <h3>25</h3>
            <h5>Canceled</h5>
          </div>
          <div>
            <MdOutlineFreeCancellation className="text-3xl text-red" />
          </div>
        </div>
        <div className="flex justify-between p-10">
          <div>
            <h3>14</h3>
            <h5>Failed</h5>
          </div>
          <div>
            <MdOutlineSmsFailed className="text-3xl text-red" />
          </div>
        </div>
      </div>
      {/* order lists table*/}
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="table border">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>O-Code</th>
                <th>Date</th>
                <th>Customers</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row start */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Purple</td>
                <td>Purple</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={adminImg} alt="adminImg" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
