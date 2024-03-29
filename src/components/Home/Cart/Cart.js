/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from "react-redux";
import { SlMinus } from "react-icons/sl";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
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

  // calculate total amount
  const subTotal = products?.reduce((order, item) => order + item.price * item.quantity, 0);
  const taxAmount = 0.1 * subTotal;
  const shipping = 56;
  const total = subTotal + shipping + taxAmount;

  // Remove cart
  const handleRemove = productId => {
    dispatch(removeFromCart(productId));
  };
  // increment & decrement
  const handleIncrement = productId => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = productId => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto lg:px-32 py-10">
        <h3 className="my-10 text-center lg:text-left">Shopping Cart</h3>
        <div className="border-t my-10">
          <div className="lg:grid grid-cols-3">
            <div className="col-span-2 p-5">
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
                        <button className="border mt-4 lg:px-4 lg:py-1 px-2 rounded-full ">
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
                      <button className="text-green  font-bold border-2 px-2 rounded-lg border-green">
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
            {/* order summary */}
            <div className="col-span-1 mt-10 border-l p-10">
              <h4 className="mb-10">Order Summary</h4>
              <div className="flex justify-between py-4 border-b ">
                <span className="text-slate-500">Subtotal</span>
                <h5>${subTotal.toFixed(2)}</h5>
              </div>
              <div className="flex justify-between py-4 border-b ">
                <span className="text-slate-500">Shipping estimate</span>
                <h5>${subTotal === 0 ? "00" : shipping}</h5>
              </div>
              <div className="flex justify-between py-4 border-b ">
                <span className="text-slate-500">Tax estimate</span>
                <h5>${subTotal === 0 ? "00" : taxAmount}</h5>
              </div>
              <div className="flex justify-between py-4  ">
                <span className="text-[20px] font-bold">Order total</span>
                <h5>${subTotal === 0 ? "00" : total.toFixed(2)}</h5>
              </div>
              <div className="w-80 my-10">
                <Link to="/checkout">
                  <button className=" w-full btn btn-active btn-neutral text-white rounded-full ">
                    Check out
                  </button>
                </Link>
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
