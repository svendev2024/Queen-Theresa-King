import React from "react";
import { facebook, instagram, menu1, menu2 } from "../icons";

const Footer = () => {

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-between px-20 py-16 bg-black text-white align-center gap-12">
          <div className="flex">
            <img className="max-w-32 h-auto mx-auto" src="./images/qtklogo.webp"></img>
          </div>
          <div className="flex gap-8 items-center nav-bar mx-auto">
            <button>HOME</button>
            <button>ABOUT&nbsp;US</button>
            <button>SERVICE</button>
            <button>PHOTO</button>
            <button>EPK&nbsp;FOR&nbsp;MEDIA</button>
            <button>BLOG</button>
            <button>CONTACT&nbsp;US</button>
          </div>
          <div className="flex justify-between px-32 py-4 top-header">
            <div className="mx-auto">
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
            </div>
          </div>
          <div className="flex">
            <img className="max-w-52 h-auto mx-auto" src="./images/Review-us-on-google-white.webp"></img>
          </div>
          <div className="text-center">Copyright © 2024 Queen Theresa King – All Rights Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Footer