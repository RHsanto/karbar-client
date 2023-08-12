import React from "react";
import facebook from "../../images/footer/facebook.svg";
import youtube from "../../images/footer/youtube.svg";
import twitter from "../../images/footer/twitter.svg";
import telegram from "../../images/footer/telegram.svg";

const Footer = () => {
  return (
    <div className="border-t-2 pt-16">
      <div className="container mx-auto lg:px-32 lg:pb-20">
        <div className="flex flex-col items-center lg:grid grid-cols-4 gap-5 ">
          <div>
            <h4>Dokan </h4>
            <div className="my-5">
              <li className="flex  items-center gap-2">
                <img src={facebook} alt="img" className="w-5 h-5" /> Facebook
              </li>
              <li className="flex items-center gap-2 my-2">
                <img src={youtube} alt="img" className="w-5 h-5" /> Youtube
              </li>
              <li className="flex items-center gap-2 my-2">
                <img src={telegram} alt="img" className="w-5 h-5" /> Telegram
              </li>
              <li className="flex items-center gap-2">
                <img src={twitter} alt="img" className="w-5 h-5" /> Twitter
              </li>
            </div>
          </div>
          {/* second div */}
          <div>
            <h5>Explore</h5>
            <div className="all_explore my-5">
              <div>Women</div>
              <div className="my-3">Mans</div>
              <div className="my-3">Kids</div>
              <div>Jewels</div>
            </div>
          </div>
          {/* third div */}
          <div>
            <h5>Quick Link</h5>
            <div className="all_explore my-5">
              <div>Women</div>
              <div className="my-3">Mans</div>
              <div className="my-3">Kids</div>
              <div>Jewels</div>
            </div>
          </div>
          <div>
            <h5>Resources</h5>
            <div className="all_explore my-5">
              <div>Support</div>
              <div className="my-3">Contact</div>
              <div className="my-3">About</div>
              <div>Jewels</div>
            </div>
          </div>
          {/* <div className='p-5 lg:p-0'>
      <h5>Subscribe For Newsletter</h5>
      <p className='my-5'>Be the first one to know about discounts,offers and events. Unsubscribe whenever you like.</p>
      <div className="flex gap-3">
      <input type="email" className='outline-none px-2 border-2 w-96 h-12 rounded' />
      <button className='bg-black rounded text-white px-4'>Subscribe</button>
      </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
