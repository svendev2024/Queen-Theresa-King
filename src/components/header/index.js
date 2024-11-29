import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FaAlignJustify, FaChevronDown } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [isDropdown, setIsDropdown] = useState({
    service: false,
  });

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between px-8 py-4 bg-black text-white align-center gap-12 md:px-16">
          <div className="flex">
            <img className="max-w-32 h-auto" src="./images/qtklogo.webp"></img>
          </div>
          <div className="flex gap-8 items-center justify-between nav-bar">
            {/*
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT&nbsp;US</Link>
            <div className="cursor-pointer">
              <div
                className="flex"
                onClick={() =>
                  setIsDropdown((prev) => ({ ...prev, service: !prev.service }))
                }
              >
                SERVICES&nbsp;
                <FaChevronDown className="my-auto" />
              </div>
              <div
                id="dropdown"
                className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
                  isDropdown.service ? "" : "hidden"
                }`}
              >
                <div className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 text-black">
                  <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Personal&nbsp;Growth&nbsp;Seminars&nbsp;and&nbsp;Workshops
                  </Link>
                  <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Motivational&nbsp;Speaker
                  </Link>
                  <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Soulful&nbsp;Music&nbsp;with&nbsp;Powerful&nbsp;Messages
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/">PHOTO</Link>
            <Link to="/epk-for-media">EPK&nbsp;FOR&nbsp;MEDIA</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">CONTACT&nbsp;US</Link>
          */}
          </div>
          <div className="flex items-center gap-8 nav-bar">
            <Link to="/">HOME</Link>
            <Link to="/epk-for-media">EPK&nbsp;FOR&nbsp;MEDIA</Link>
            <button className="bg-white rounded-md text-black px-12 py-3">
              GET&nbsp;IN&nbsp;TOUCH
            </button>
          </div>
          <div className="flex mobile-menu">
            <div className="my-auto">
              <div className="cursor-pointer">
                <div
                  className="flex"
                  onClick={() =>
                    setIsDropdown((prev) => ({
                      ...prev,
                      service: !prev.service,
                    }))
                  }
                >
                  <FaAlignJustify className="my-auto ml-auto text-2xl" />
                </div>
                <div
                  id="dropdown"
                  className={`relative z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 right-0 mt-2 ${
                    isDropdown.service ? "" : "hidden"
                  }`}
                >
                  <div className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 text-black">
                    {/* NOTE: Do we really need to repeat the header twice? */}
                    <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Home
                    </Link>
                    <Link
                      to="/epk-for-media"
                      className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      EPK&nbsp;FOR&nbsp;MEDIA
                    </Link>
                    {/*
                      TODO: Convert to be dynamic.
                      FIXME: Services header doesn't render properly on mobile.
                      <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Home
                      </Link>
                      <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        ABOUT&nbsp;US
                      </Link>
                      <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        SERVICES
                      </Link>
                      <Link className="block px-20 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Personal&nbsp;Growth&nbsp;Seminars&nbsp;and&nbsp;Workshops
                      </Link>
                      <Link className="block px-20 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Motivational&nbsp;Speaker
                      </Link>
                      <Link className="block px-20 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Soulful&nbsp;Music&nbsp;with&nbsp;Powerful&nbsp;Messages
                      </Link>
                      <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        PHOTOS
                      </Link>
                      <Link
                        to="/epk-for-media"
                        className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        EPK&nbsp;FOR&nbsp;MEDIA
                      </Link>
                      <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        SHOP
                      </Link>
                      <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        BLOGS
                      </Link>
                      <Link className="block px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        CONTACT&nbsp;US
                      </Link>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
