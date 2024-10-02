import React from "react";
import { facebook, instagram, menu1, menu2 } from "../icons";
import './header.css'

const Header = () => {

  return (
    <>
      <div className="w-full">
        
        <button className="fixed w-8 h-8 flex end-1.5 top-1.5">
          <div
            className="m-auto"
            dangerouslySetInnerHTML={{
              __html: menu1,
            }}
          />
        </button>
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