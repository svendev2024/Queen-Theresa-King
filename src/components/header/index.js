import React, { useState } from "react";
import { facebook, instagram, menu1, menu2 } from "../icons";
import './header.css'

const Header = () => {

  const [isMenu, setIsMenu] = useState(false) 

  return (
    <>
      <div className="w-full">
        <div className="fixed w-8 h-8 flex end-3 top-3 flex flex-col">
          <div className="">
            <div
              className="m-auto"
              onClick={() => setIsMenu(!isMenu)}
              dangerouslySetInnerHTML={{
                __html: menu1,
              }}
            />
            <div id="dropdown" className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 right-0 ${isMenu ? "" : "hidden"}`}>
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <div href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home Menu</div>
                </li>
                <li>
                  <div href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login/SignUp</div>
                </li>
                <li>
                  <div href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Window Mode</div>
                </li>
                <li>
                  <div href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hard Refresh</div>
                </li>
                <li>
                  <div href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hide SmartTicker</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-32 py-4 bg-[#f2f2f2] top-header">
          <div>
            <div className="flex gap-4">
              <button className="rounded-md bg-main-pink w-8 h-8 flex">
                <div
                  className="m-auto"
                  dangerouslySetInnerHTML={{
                    __html: facebook,
                  }}
                />
              </button>
              <button className="rounded-md bg-main-pink w-8 h-8 flex">
                <div
                  className="m-auto"
                  dangerouslySetInnerHTML={{
                    __html: instagram,
                  }}
                />
              </button>
            </div>
            <button></button>
          </div>
          <button className="px-12 py-0 text-base bg-black text-white rounded-lg">REVIEW&nbsp;US&nbsp;ON&nbsp;GOOGLE</button>
        </div>

        <div className="flex justify-between px-20 py-4 bg-black text-white align-center gap-12">
          <div className="flex">
            <img className="max-w-32 h-auto" src="./images/qtklogo.webp"></img>
          </div>
          <div className="flex gap-8 items-center justify-between nav-bar">
            <button>HOME</button>
            <button>ABOUT&nbsp;US</button>
            <button>SERVICE</button>
            <button>PHOTO</button>
            <button onClick={() =>  window.history.pushState({}, '', '/epk-for-media')}>EPK&nbsp;FOR&nbsp;MEDIA</button>
            <button>BLOG</button>
            <button>CONTACT&nbsp;US</button>
          </div>
          <div className="flex items-center nav-bar">
            <button className="bg-white rounded-md text-black px-12 py-3">GET&nbsp;IN&nbsp;TOUCH</button>
          </div>
          <div className="drop-menu align-center">
            <button className="w-auto">
              <div
                className="m-auto"
                dangerouslySetInnerHTML={{
                  __html: menu2,
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header