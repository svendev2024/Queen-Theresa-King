import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-between px-20 py-16 bg-black text-white align-center gap-12">
          <div className="flex">
            <img
              className="max-w-32 h-auto mx-auto"
              src="./images/qtklogo.webp"
            ></img>
          </div>
          <div className="flex gap-8 items-center nav-bar mx-auto">
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT&nbsp;US</Link>
            <Link to="/">SERVICE</Link>
            <Link to="/">PHOTO</Link>
            <Link to="/epk-for-media">EPK&nbsp;FOR&nbsp;MEDIA</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">CONTACT&nbsp;US</Link>
          </div>
          <div className="flex justify-between px-32 py-4 top-header">
            <div className="mx-auto">
              <div className="flex gap-4">
                <button className="rounded-md bg-main-pink w-8 h-8 flex">
                  <FaFacebookF className="m-auto" />
                </button>
                <button className="rounded-md bg-main-pink w-8 h-8 flex">
                  <FaInstagramSquare className="m-auto" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              className="max-w-52 h-auto mx-auto"
              src="./images/Review-us-on-google-white.webp"
            ></img>
          </div>
          <div className="text-center">
            Copyright © 2024 Queen Theresa King – All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
