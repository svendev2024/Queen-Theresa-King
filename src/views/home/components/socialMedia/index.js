import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
  FaXing,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="flex bg-main-pink h-[30vh]">
          <FaFacebookF className="m-auto text-white text-5xl" />
        </div>
        <div className="flex justify-center bg-[#c80ee5] h-[30vh]">
          <div className="m-auto">
            <div className="m-auto text-4xl text-white italic text-center">
              Follow&nbsp;us
            </div>
            <div className="m-auto text-4xl text-white italic text-center">
              on&nbsp;social&nbsp;Media
            </div>
          </div>
        </div>
        <div className="flex bg-main-pink h-[30vh]">
          <FaXing className="m-auto text-white text-5xl" />
        </div>
        <div className="flex bg-[#c80ee5] h-[30vh]">
          <FaInstagramSquare className="m-auto text-white text-5xl" />
        </div>
        <div className="flex bg-main-pink h-[30vh]">
          <FaYoutube className="m-auto text-white text-5xl" />
        </div>
        <div className="flex bg-[#c80ee5] h-[30vh]">
          <FaTiktok className="m-auto text-white text-5xl" />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
