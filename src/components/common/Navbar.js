/* eslint-disable array-callback-return */
import { BiLogOutCircle, BiUser } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../Redux/Slice/CartSlice";
import useFirebase from "../../hooks/useFirebase";
import logo from "../../images/logo.PNG";
const Navbar = () => {
  const { user, logOut } = useFirebase();
  // console.log(user);

  const [activeItem, setActiveItem] = useState("");
  const firstName = user?.displayName?.split(" ")[0];
  const items = useSelector(state => state.cart);
  // console.log(items);
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const [subTotal, setSubTotal] = useState(0);
  // here slice product for cart
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

  // active btn
  const handleMenuItemClick = itemName => {
    setActiveItem(itemName);
  };

  return (
    <div className="z-[9999] bg-white sticky  border-b top-0">
      {/* large screen menu */}
      <div className="lg:block hidden">
        <div className=" container px-32 mx-auto  h-20  flex justify-between items-center ">
          <div className="logo">
            <Link className=" flex items-center" onClick={() => handleMenuItemClick("")} to="/">
              <img className="w-[50px]" src={logo} alt="" /> <h4> Karbar</h4>
            </Link>
          </div>

          {/* here start nav items */}
          <div>
            <div className="font-semibold gap-2 flex">
              <Link
                onClick={() => handleMenuItemClick("men")}
                to="/men"
                className={`${
                  activeItem === "men"
                    ? "rounded-full bg-black text-white py-3 px-10"
                    : "  hover:bg-offWhite py-3 px-10 rounded-full"
                }`}
              >
                Men
              </Link>
              <Link
                onClick={() => handleMenuItemClick("women")}
                to="/women"
                className={`${
                  activeItem === "women"
                    ? "rounded-full bg-black text-white py-3 px-10"
                    : "  hover:bg-offWhite py-3 px-10 rounded-full"
                }`}
              >
                Women
              </Link>
              <Link
                onClick={() => handleMenuItemClick("beauty")}
                to="/beauty"
                className={`${
                  activeItem === "beauty"
                    ? "rounded-full bg-black text-white py-3 px-10"
                    : "  hover:bg-offWhite py-3 px-10 rounded-full"
                }`}
              >
                Beauty
              </Link>
              <Link
                onClick={() => handleMenuItemClick("kids")}
                to="/kids"
                className={`${
                  activeItem === "kids"
                    ? "rounded-full bg-black text-white py-3 px-10"
                    : "  hover:bg-offWhite py-3 px-10 rounded-full"
                }`}
              >
                Kids
              </Link>
              <Link
                onClick={() => handleMenuItemClick("sport")}
                to="/sport"
                className={`${
                  activeItem === "sport"
                    ? "rounded-full bg-black text-white py-3 px-10"
                    : "  hover:bg-offWhite py-3 px-10 rounded-full"
                }`}
              >
                Sport
              </Link>
              <Link
                onClick={() => handleMenuItemClick("contact")}
                to="/contact"
                className={`${
                  activeItem === "contact"
                    ? "rounded-full bg-black text-white py-3 px-10"
                    : "  hover:bg-offWhite py-3 px-10 rounded-full"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {/* here cart button*/}
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
                        <button className="btn rounded-full  px-10">
                          <Link onClick={() => handleMenuItemClick("cart")} to="/cart" className="">
                            View cart
                          </Link>
                        </button>
                        <button
                          disabled={!items?.length}
                          className="btn bg-black rounded-full px-10 text-white"
                        >
                          <Link onClick={() => handleMenuItemClick("checkout")} to="/checkout">
                            Check out
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Login user info */}
            <div>
              {user?.email ? (
                <div>
                  <div className="dropdown">
                    <label tabIndex={0} className=" m-1">
                      <div className=" flex items-center gap-2 border-2 border-black p-2 rounded-lg cursor-pointer">
                        <BiUser className="text-2xl" />
                        {firstName}
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border"
                    >
                      <Link to="/userDash">
                        <button className="p-3 rounded-lg mb-2 text-center hover:bg-slate-200 w-full flex font-bold items-center  gap-3">
                          <FaUserAlt className="text-[20px]" /> My Account
                        </button>
                      </Link>
                      <Link onClick={() => handleMenuItemClick("cart")} to="/cart">
                        <button className="p-3 rounded-lg mb-2 text-center hover:bg-slate-200 w-full flex font-bold items-center  gap-3">
                          <LuClipboardList className="text-2xl" /> My Orders
                        </button>
                      </Link>
                      <div>
                        <button onClick={logOut} className="btn bg-red w-full text-white">
                          <BiLogOutCircle className="text-2xl" /> Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Link onClick={() => handleMenuItemClick("login")} to="/login">
                    <button className="btn btn-info text-white">Sign in</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* small device menu */}
      <div className="lg:hidden flex justify-between  items-center mx-5">
        {/* drawer items */}
        <div>
          <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" drawer-button">
                <TfiMenu className="text-2xl cursor-pointer" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div
                className="menu  w-80 h-full bg-white
               text-base-content"
              >
                {/* Sidebar content here */}
                <div className="text-center">
                  <Link to="/">
                    <h3>Dokan</h3>
                  </Link>
                </div>
                <div className="border-t border-b px-2 py-5 font-bold uppercase">
                  <Link to="/men" className="">
                    <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">Men</div>
                  </Link>
                  <Link to="/women" className="">
                    <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">women</div>
                  </Link>
                  <Link to="/kids" className="">
                    <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">kids</div>
                  </Link>
                  <Link to="/sport" className="">
                    <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">sport</div>
                  </Link>
                  <Link to="/beauty" className="">
                    <div className=" hover:bg-slate-100 rounded-lg p-4 cursor-pointer">beauty</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* logo */}
        <Link className=" flex items-center" to="/">
          <img className="w-[50px]" src={logo} alt="" /> <h4> Karbar</h4>
        </Link>
        {/* cart and user */}
        <div className="flex items-center gap-5">
          {/* Login user info */}
          <div>
            {user?.email ? (
              <div>
                <div className="dropdown">
                  <label tabIndex={0} className="m-1">
                    <div className="flex items-center gap-2 border-2 border-black p-2 rounded-lg cursor-pointer">
                      <BiUser className="text-2xl" />
                      {firstName}
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className=" border dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52 -ml-10"
                  >
                    <div className="p-3.5 rounded-lg mb-2 text-center hover:bg-slate-100">
                      <Link to="/cart">My Orders</Link>
                    </div>
                    <div>
                      <button onClick={logOut} className="btn btn-error w-full text-white">
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="btn btn-info text-white">Sign in</button>
                </Link>
              </div>
            )}
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
                      <Link to="/cart" className="">
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
