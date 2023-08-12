/* eslint-disable array-callback-return */
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../Redux/Slice/CartSlice";

const Navbar = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const [subTotal, setSubTotal] = useState(0);

  const sliceProduct = products?.slice(0, 4);

  // remove items
  const handleRemove = productId => {
    dispatch(removeFromCart(productId));
  };

  // calculation
  useEffect(() => {
    // Calculate subtotal
    let calculatedSubTotal = 0;
    products.map(product => {
      calculatedSubTotal += product.price * product.quantity;
    });
    setSubTotal(calculatedSubTotal);
  }, [products]);

  return (
    <div className="z-[9999] bg-white fixed w-[100%] border-b">
      {/* large screen menu */}
      <div className="lg:block hidden">
        <div className=" container px-32 mx-auto  h-20  flex justify-between items-center ">
          <div className="logo">
            <Link to="/">
              <h4>Karbar</h4>
            </Link>
          </div>

          {/* here start nav items */}
          <div>
            <div className="font-semibold">
              <Link to="/men" className="mx-0 hover:bg-offWhite py-3 px-10 rounded-full">
                Men
              </Link>
              <Link to="/women" className="mx-0 hover:bg-offWhite py-3 px-10 rounded-full">
                Women
              </Link>
              <Link to="/beauty" className="mx-0 hover:bg-offWhite py-3 px-10 rounded-full">
                Beauty
              </Link>
              <Link to="/kids" className="mx-0 hover:bg-offWhite py-3 px-10 rounded-full">
                Kids
              </Link>
              <Link to="/sport" className="mx-0 hover:bg-offWhite py-3 px-10 rounded-full">
                Sport
              </Link>
              <Link to="/contact" className="mx-0 hover:bg-offWhite py-3 px-10 rounded-full">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-3 text-2xl  border-2 border-black rounded-full p-2">
              <BiUser />
            </div>
            {/* cart  */}
            <div>
              {/* dropdown start */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0}>
                  <div className="indicator">
                    <span className="indicator-item badge bg-blue text-white">{items?.length}</span>
                    <button className="border-2 border-black rounded-full p-2">
                      <BsCart4 className="text-2xl" />
                    </button>
                  </div>
                </label>

                {/* dropdown cart */}
                <div
                  tabIndex={0}
                  className="mt-5 dropdown-content z-[99] menu p-2 shadow-lg bg-base-100 rounded-box w-[448px]"
                >
                  <div className=" p-2">
                    <h4 className="my-3">Shopping cart</h4>
                    {sliceProduct.map(product => (
                      <div key={product?._id} className="flex justify-between my-3 border-b pb-2">
                        {/* img section */}
                        <div className=" flex gap-5">
                          <img
                            className="w-20 h-24 bg-[#F1F5F9] rounded-lg"
                            src={product?.productImg}
                            alt="img"
                          />
                          <div>
                            <h5 className="mb-1">{product?.name}</h5>
                            <span>{product?.description}</span> <br />
                            {product?.message ? (
                              <button className="border mt-4 px-4 py-1 rounded-full ">
                                {product?.message}
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        {/* price and remove section */}
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
                    {/*SubTotal & button section */}
                    <div className="">
                      <div className="flex justify-between">
                        <h5>SubTotal</h5>
                        <h5>${subTotal}.00</h5>
                      </div>
                      <p>Shipping and taxes calculated at checkout.</p>
                      <div className="flex justify-center p-5 gap-5">
                        <Link to="/cart" className="mx-0">
                          <button className="btn rounded-full  px-10">View cart</button>
                        </Link>
                        <Link to="/checkout">
                          <button className="btn bg-black rounded-full px-10 text-white">
                            Check out
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* small device menu */}
      <div className="lg:hidden flex justify-between p-5 items-center">
        {/* drawer items */}
        <div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" drawer-button">
                <TfiMenu className="text-2xl cursor-pointer" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div className="menu  w-80 h-full bg-white text-base-content">
                {/* Sidebar content here */}
                <div className="text-center">
                  <Link to="/">
                    <h3>Dokan</h3>
                  </Link>
                </div>
                <div className="border-t border-b px-2 py-5 font-bold uppercase">
                  <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">
                    <Link to="/men" className="mx-0">
                      Men
                    </Link>
                  </div>
                  <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">
                    <Link to="/women" className="mx-0">
                      women
                    </Link>
                  </div>
                  <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">
                    <Link to="/kids" className="mx-0">
                      kids
                    </Link>
                  </div>
                  <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">
                    <Link to="/sport" className="mx-0">
                      sport
                    </Link>
                  </div>
                  <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">
                    <Link to="/beauty" className="mx-0">
                      beauty
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* logo */}
        <Link to="/">
          <h3>Dokan</h3>
        </Link>
        {/* cart and user */}
        <div className="flex items-center">
          <div className="mr-3 text-2xl  border-2 border-black rounded-full p-2">
            <BiUser />
          </div>
          {/* cart  */}
          <div>
            {/* dropdown start */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <div className="indicator">
                  <span className="indicator-item badge bg-blue text-white">{items?.length}</span>
                  <button className="border-2 border-black rounded-full p-2">
                    <BsCart4 className="text-2xl" />
                  </button>
                </div>
              </label>

              {/* dropdown cart */}
              <div
                tabIndex={0}
                className="mt-6 dropdown-content z-[99] menu p-2 shadow-lg bg-base-100 rounded-box w-[448px]"
              >
                <div className=" p-2">
                  <h4 className="my-3">Shopping cart</h4>
                  {sliceProduct.map(product => (
                    <div key={product?._id} className="flex justify-between my-3 border-b pb-2">
                      {/* img section */}
                      <div className=" flex gap-5">
                        <img
                          className="w-20 h-24 bg-[#F1F5F9] rounded-lg"
                          src={product?.productImg}
                          alt="img"
                        />
                        <div>
                          <h5 className="mb-1">{product?.name}</h5>
                          <span>{product?.description}</span> <br />
                          {product?.message ? (
                            <button className="border mt-4 px-4 py-1 rounded-full ">
                              {product?.message}
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      {/* price and remove section */}
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
                  {/*SubTotal & button section */}
                  <div className="">
                    <div className="flex justify-between">
                      <h5>SubTotal</h5>
                      <h5>${subTotal}.00</h5>
                    </div>
                    <p>Shipping and taxes calculated at checkout.</p>
                    <div className="flex justify-center p-5 gap-5">
                      <Link to="/cart" className="mx-0">
                        <button className="btn rounded-full  px-10">View cart</button>
                      </Link>
                      <Link to="/checkout">
                        <button className="btn bg-black rounded-full px-10 text-white">
                          Check out
                        </button>
                      </Link>
                    </div>
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

export default Navbar;
