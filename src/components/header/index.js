import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'; 
import { FaAlignJustify } from 'react-icons/fa';  
import './header.css'

const Header = () => {

  return (
    <>
      <div className="w-full">
        <div className="fixed w-8 h-8 end-3 top-3 flex flex-col">
          <Dropdown>  
            <Dropdown.Toggle>  
              <FaAlignJustify color="red" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">  
              <Dropdown.Item className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home Menu</Dropdown.Item>  
              <Dropdown.Item className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login/SignUp</Dropdown.Item>  
              <Dropdown.Item className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Window Mode</Dropdown.Item>  
              <Dropdown.Item className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hard Refresh</Dropdown.Item>  
              <Dropdown.Item className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hide SmartTicker</Dropdown.Item>  
            </Dropdown.Menu>  
          </Dropdown>  
        </div>

        <div className="flex justify-between px-20 py-4 bg-black text-white align-center gap-12">
          <div className="flex">
            <img className="max-w-32 h-auto" src="./images/qtklogo.webp"></img>
          </div>
          <div className="flex gap-8 items-center justify-between nav-bar">
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT&nbsp;US</Link>
            <Link to="/">SERVICE</Link>
            <Link to="/">PHOTO</Link>
            <Link to="/epk-for-media">EPK&nbsp;FOR&nbsp;MEDIA</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">CONTACT&nbsp;US</Link>
          </div>
          <div className="flex items-center nav-bar">
            <button className="bg-white rounded-md text-black px-12 py-3">GET&nbsp;IN&nbsp;TOUCH</button>
          </div>
          <div className="drop-menu align-center">
            <button className="w-auto">
              <FaAlignJustify />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header