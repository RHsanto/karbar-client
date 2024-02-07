import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../images/footer/facebook.svg";
import youtube from "../../images/footer/youtube.svg";
import twitter from "../../images/footer/twitter.svg";
import telegram from "../../images/footer/telegram.svg";

const socialIcons = [
  { icon: facebook, text: "Facebook" },
  { icon: youtube, text: "Youtube" },
  { icon: telegram, text: "Telegram" },
  { icon: twitter, text: "Twitter" },
];

const Footer = () => {
  return (
    <div className="border-t-2 pt-16">
      <div className="container mx-auto lg:px-32 lg:pb-20">
        <div className="lg:grid flex flex-col lg:grid-cols-4 gap-10 justify-center items-center">
          <div>
            <h4 className="mb-5">Dokan </h4>
            <div className="flex flex-col gap-4">
              {socialIcons.map(item => (
                <li key={item?.text} className="flex items-center gap-2">
                  <img src={item?.icon} alt="img" className="w-5 h-5" /> {item?.text}
                </li>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-5">Quick Link</h5>
            <div className="flex flex-col gap-4 ">
              {["Women", "Men", "Kids", "Beauty"].map(link => (
                <div key={link}>
                  <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-5">Resources</h5>
            <div className="flex flex-col gap-4">
              {["Support", "Contact", "About", "FAQ"].map(resource => (
                <div key={resource}>
                  <Link to="/">{resource}</Link>
                </div>
              ))}
            </div>
          </div>

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
      <div>
        <p className="text-center py-4 border-t-2 text-[16px]"> &copy; All Right Reserved RH</p>
      </div>
    </div>
  );
};

export default Footer;
