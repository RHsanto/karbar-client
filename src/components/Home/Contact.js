import React from "react";
import FB from "../../images/footer/facebook.svg";
import YT from "../../images/footer/youtube.svg";
import TG from "../../images/footer/telegram.svg";
import TW from "../../images/footer/twitter.svg";
import { FcAddressBook, FcGlobe, FcPhone, FcVoicemail } from "react-icons/fc";
const Contact = () => {
  return (
    <div className="container mx-auto lg:px-32 mt-32 ">
      <h2 className="text-center lg:my-20 my-10">Contact</h2>
      <div className="lg:grid grid-cols-2 gap-10 p-10 ">
        {/* input field here */}
        <div>
          <div className="mb-5">
            <h5>Full Name</h5>
            <input
              className="my-2 outline-none border-2 w-full h-12 rounded-xl p-2"
              type="text"
              placeholder="Enter Your name"
            />
          </div>
          <div className="mb-5">
            <h5>Email</h5>
            <input
              className="my-2 outline-none border-2 w-full h-12 rounded-xl p-2"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-5">
            <h5>Message</h5>
            <textarea
              className="my-2 outline-none border-2 w-full  rounded-xl p-2"
              id=""
              cols="30"
              rows="10"
              placeholder="Write message..."
            ></textarea>
          </div>
          <button className="active-btn">send message</button>
        </div>
        {/* address info */}
        <div className="lg:px-20 mt-20 lg:mt-0">
          <div className="mb-10">
            <h5 className="mb-2 flex items-center gap-1">
              <FcAddressBook className="text-2xl" /> ADDRESS
            </h5>
            <> Gulshan 2, Dhaka, Bangladesh</>, <br />
            <span> Sonargoan , Narayongonj, Bangladesh</span>
          </div>
          <div className="mb-10">
            <h5 className="mb-2 flex items-center gap-1">
              <FcVoicemail className="text-2xl" /> EMAIL
            </h5>
            <>karbar123@gmail.com</>
          </div>
          <div className="mb-10 ">
            <h5 className="mb-2 flex items-center gap-1">
              <FcPhone className="text-2xl" /> PHONE
            </h5>
            <>+880-1836825730</>, <>+880-1024578989</>
          </div>
          <div className="mb-10">
            <h5 className="flex items-center gap-1">
              <FcGlobe className="text-2xl" /> SOCIALS LINK
            </h5>
            <div className="flex my-5 gap-4">
              <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                <img src={FB} alt="" className="w-6 h-6" />
              </a>
              <a target="_blank" href="https://www.youtube.com" rel="noreferrer">
                <img src={YT} alt="" className="w-6 h-6" />
              </a>
              <a target="_blank" href="https://web.telegram.org" rel="noreferrer">
                <img src={TG} alt="" className="w-6 h-6" />
              </a>
              <a target="_blank" href="https://twitter.com" rel="noreferrer">
                <img src={TW} alt="" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
