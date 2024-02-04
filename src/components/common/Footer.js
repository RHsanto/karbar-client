import React from "react";
import facebook from "../../images/footer/facebook.svg";
import youtube from "../../images/footer/youtube.svg";
import twitter from "../../images/footer/twitter.svg";
import telegram from "../../images/footer/telegram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-2 pt-16">
      <div className="container mx-auto lg:px-32 lg:pb-20">
        <div
          className="flex flex-col
         items-center lg:grid grid-cols-4 gap-10
          "
        >
          <div>
            <h4 className="mb-5">Dokan </h4>
            <div className="flex flex-col gap-4">
              <li className="flex  items-center gap-2">
                <img src={facebook} alt="img" className="w-5 h-5" /> Facebook
              </li>
              <li className="flex items-center gap-2 ">
                <img src={youtube} alt="img" className="w-5 h-5" /> Youtube
              </li>
              <li className="flex items-center gap-2 ">
                <img src={telegram} alt="img" className="w-5 h-5" /> Telegram
              </li>
              <li className="flex items-center gap-2">
                <img src={twitter} alt="img" className="w-5 h-5" /> Twitter
              </li>
            </div>
          </div>

          {/* second div */}
          <div>
            <h5 className="mb-5">Quick Link</h5>
            <div className="flex flex-col gap-4 ">
              <div>
                <Link to="/women">Women</Link>{" "}
              </div>
              <div>
                <Link to="/men">Mans</Link>
              </div>
              <div>
                <Link to="/kids">Kids</Link>
              </div>
              <div>
                <Link to="/beauty">Jewels</Link>
              </div>
            </div>
          </div>
          {/* third div */}
          <div>
            <h5 className="mb-5">Resources</h5>
            <div className="flex flex-col gap-4">
              <div>
                <Link to="/">Support</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <Link to="/">About</Link>
              </div>
              <div>
                <Link to="/">FAQ</Link>
              </div>
            </div>
          </div>
          {/* last div */}
          <div className="lg:p-0 p-16">
            <h5 className="mb-5">Subscribe</h5>
            <span>
              Enter your email below to be the first to know about new collections and product
              launches.
            </span>
            <input
              type="text"
              placeholder=" &#x1F4E7; Your Email"
              className="input input-bordered w-full max-w-xs mt-5"
            />
          </div>
        </div>
      </div>
      {/* copyright */}
      <div>
        <p className="text-center py-4 border-t-2 text-[16px]"> &copy; All Right Reserved RH</p>
      </div>
    </div>
  );
};

export default Footer;
