/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from "react-redux";
import { SlMinus } from "react-icons/sl";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../Redux/Slice/CartSlice";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);

  // State for coupon code and discounted total
  const [couponCode, setCouponCode] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Calculate totals
  const subTotal = products?.reduce((order, item) => order + item.price * item.quantity, 0);
  const taxAmount = 0.1 * subTotal;
  const shipping = 56;
  const total = subTotal + shipping + taxAmount;

  // Coupon codes
  const coupons = {
    RHSAN15: 0.15,
    KARBAR10: 0.1,
    RH0005: 0.05,
  };

  // Handle coupon application
  const handleCoupon = e => {
    e.preventDefault();
    const discount = coupons[couponCode.toUpperCase()];

    if (discount) {
      const newTotal = total - total * discount;
      setDiscountedTotal(newTotal.toFixed(2));
      setCouponCode("");
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid coupon code. Please try again.");
    }
  };

  // Remove item from cart
  const handleRemove = productId => {
    dispatch(removeFromCart(productId));
  };

  // Increment & decrement
  const handleIncrement = productId => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = productId => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:px-32">
        <h4 className="my-8 text-center lg:text-left">Shopping Cart</h4>
        <div className="border-t my-10">
          <div className="lg:grid grid-cols-3">
            <div className="col-span-2 p-5">
              {products?.length === 0 && <h1 className="text-center">404</h1>}
              {products.map(product => (
                <div key={product?._id} className="flex justify-between my-10 border-b pb-10">
                  <div className=" flex lg:gap-5 gap-3">
                    <img
                      className="lg:w-32 lg:h-36 w-22 h-28 bg-[#F1F5F9] rounded-lg"
                      src={product?.productImg}
                      alt="img"
                    />
                    <div>
                      <h5 className="mb-1">{product?.name}</h5>
                      <span>{product?.description}</span> <br />
                      {product?.message ? (
                        <button className="border mt-4 lg:px-4 lg:py-1 px-2 rounded-full">
                          {product?.message}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center gap-5">
                    <button onClick={() => handleDecrement(product?._id)}>
                      <SlMinus className="text-3xl" />
                    </button>
                    <h5>{product?.quantity}</h5>
                    <button onClick={() => handleIncrement(product?._id)}>
                      <BsPlusCircle className="text-3xl" />
                    </button>
                  </div>
                  <div className="price_remove">
                    <div>
                      <button className="text-green font-bold border-2 px-2 rounded-lg border-green">
                        ${product?.price}.00
                      </button>
                    </div>
                    <div>
                      <button
                        className="mt-16 text-blue font-bold"
                        onClick={() => handleRemove(product?._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Order summary */}
            <div className="col-span-1 border-l p-10">
              <h4 className="mb-4">Order Summary</h4>
              <div className="flex justify-between py-4 border-b">
                <span className="text-slate-500">Subtotal</span>
                <h5>${subTotal.toFixed(2)}</h5>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-slate-500">Shipping estimate</span>
                <h5>${subTotal === 0 ? "00" : shipping}</h5>
              </div>
              <div className="flex justify-between py-4 border-b">
                <span className="text-slate-500">Tax estimate</span>
                <h5>${subTotal === 0 ? "00" : taxAmount.toFixed(2)}</h5>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-[20px] font-bold">Payable total</span>
                <h5>${subTotal === 0 ? "00" : discountedTotal || total.toFixed(2)}</h5>
              </div>
              <div className="my-5">
                <Link to="/checkout">
                  <button className="w-full btn btn-active btn-neutral text-white rounded">
                    Check out
                  </button>
                </Link>
              </div>
              <div className="mt-20">
                <form onSubmit={handleCoupon}>
                  <label className="font-semibold">Try Coupon / Promo Code</label>
                  <input
                    type="text"
                    placeholder="Type here coupon code"
                    className="input input-bordered w-full my-4"
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                  />
                  {errorMessage && <p className="text-red text-sm mb-1">{errorMessage}</p>}
                  <button
                    type="submit"
                    className="w-full btn bg-blue hover:text-black text-white rounded"
                  >
                    Apply Coupon Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
