/* eslint-disable array-callback-return */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [countries, setCountries] = useState([]);

  // country api call
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        const countryData = response.data;
        setCountries(countryData);
      })
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  // order calculation
  // const dispatch = useDispatch();
  const products = useSelector(state => state.cart);

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const shipping = 30;
  const tax = 56;

  useEffect(() => {
    // Calculate subtotal and total whenever the cart changes
    let calculatedSubTotal = 0;
    products.map(product => {
      calculatedSubTotal += product.price * product.quantity;
    });

    // In this example, we'll assume shipping and tax amounts
    const calculatedTotal = calculatedSubTotal + shipping + tax;

    setSubTotal(calculatedSubTotal);
    setTotal(calculatedTotal);
  }, [products]);

  return (
    <div className="container mx-auto lg:px-32">
      <h3 className="mt-10 px-10">Checkout</h3>
      <div className="lg:grid grid-cols-3 my-10 gap-10 lg:p-0 p-10">
        {/* shipping info */}
        <div className="col-span-2 ">
          <div className="shipping_form border  rounded-lg">
            {/* Header */}
            <div className="flex items-center p-5 gap-1 border-b">
              <FaShippingFast className="text-2xl mr-5" />
              <h6 className="text-[20px]">Shipping Address</h6>
            </div>
            {/* body */}
            <div className="p-5">
              {/* one */}
              <div className="lg:flex gap-10">
                <div>
                  <label className="font-semibold">First name</label> <br />
                  <input
                    type="text"
                    placeholder="Type here First name"
                    className="input input-bordered w-96 mt-2"
                  />
                </div>
                <div className="mt-5 lg:mt-0">
                  <label className="font-semibold ">Last name</label> <br />
                  <input
                    type="text"
                    placeholder="Type here Last name"
                    className="input input-bordered w-96 mt-2 "
                  />
                </div>
              </div>
              {/* two */}
              <div className="lg:flex gap-10 lg:my-10 my-5">
                <div>
                  <label className="font-semibold">Phone No</label> <br />
                  <input
                    type="number"
                    placeholder="Type here Phone No"
                    className="input input-bordered w-96 mt-2"
                  />
                </div>
                <div className="mt-5 lg:mt-0">
                  <label className="font-semibold ">Alternative No</label> <br />
                  <input
                    type="number"
                    placeholder="Type here Phone No"
                    className="input input-bordered w-96 mt-2 "
                  />
                </div>
              </div>
              {/* three */}
              <div className="lg:flex gap-10 lg:my-10 my-5">
                <div>
                  <label className="font-semibold">Country</label> <br />
                  <select id="countrySelect" className="select select-bordered mt-2 w-96">
                    <option value="">Select a country</option>
                    {countries.map(country => (
                      <option key={country.cca3} value={country.cca3}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-5 lg:mt-0">
                  <label className="font-semibold ">City</label> <br />
                  <input
                    type="text"
                    placeholder="Type here Phone No"
                    className="input input-bordered w-96 mt-2 "
                  />
                </div>
              </div>
              {/* four */}
              <div>
                <label className="font-semibold">Address</label> <br />
                <textarea
                  className="textarea textarea-bordered mt-2 w-full"
                  placeholder="Address"
                ></textarea>
              </div>
              {/* confirm btn */}

              <button className="btn btn-active btn-neutral rounded-full text-white px-10 mt-10">
                save and next to payment
              </button>
            </div>
          </div>
        </div>
        {/* checkout order info */}
        <div className="col-span-1  lg:border-l px-10 mt-20 lg:mt-0">
          <h4 className="mb-10">Checkout Summary</h4>
          <div className="flex justify-between py-4 border-b ">
            <span className="text-slate-500">Subtotal</span>
            <h5>${subTotal.toFixed(2)}</h5>
          </div>
          <div className="flex justify-between py-4 border-b ">
            <span className="text-slate-500">Shipping estimate</span>
            <h5>${shipping}</h5>
          </div>
          <div className="flex justify-between py-4 border-b ">
            <span className="text-slate-500">Tax estimate</span>
            <h5>${tax}</h5>
          </div>
          <div className="flex justify-between py-4  ">
            <span className="text-[20px] font-bold">Order total</span>
            <h5>${total.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
