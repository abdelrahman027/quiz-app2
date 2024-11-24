import React from 'react'
import logo from "../images/As.png"
import avatar from "../images/sara.jpg"
import { FaBell } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";

import { MdHome } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdHub } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import vid1 from "../images/vid.mp4"


const Navbar = () => {
  return (
    
<header className="">
  <div className="bg-[#22272C] px-12 py-2 flex justify-between items-center text-white">

    <div>
      <img src={logo} className="w-32" alt="Logo" />
    </div>


    {/* <div className="relative shadow-lg">
      <input
        className="px-6 w-96 rounded-lg"
        type="search"
        name="global-search"
        id="global-search"
        placeholder="Search..."
      />
      <button className="absolute top-[22%] right-2 text-gray-400">
        <FaSearch />
      </button>
    </div>
    <div>
      <div className="relative flex items-center gap-6" >
    <div className="flex items-center gap-6 text-white">
        <div className="relative hover:bg-slate-600  cursor-pointer  flex items-center justify-center p-4 rounded-full" id="nav-profile">
            <FaBell className='w-5 h-5' />
            <div className="absolute top-0 left-3 w-3 h-3 text-white bg-red-600 rounded-full flex items-center justify-center text-xs">0</div>
            <div
            className="absolute transition-all duration-300 h-0 shadow-lg top-6 left-4 p-2 rounded-lg text-black w-[150px]  py-4 hidden bg-white z-30"
            id="nav-profile-dropdown"
          >
          <p>No notifications for you !</p>
          </div>
        </div>
        <div className=" hover:bg-slate-600 p-4 rounded-full cursor-pointer flex items-center justify-center">
            <FaRobot className='w-5 h-5'/>
        </div>
    </div >

        <img
          src={avatar}
          className="w-8 rounded-full cursor-pointer"
          alt="Logo"
          
        />

        <span>Sara Mansory</span>

        <a className="text-xs hover:bg-slate-600 w-12 h-12  flex items-center justify-center rounded-full" href="/">logout</a>


        
      </div>
    </div> */}
  </div>

{/* 
  <div
    className="bg-[#363F49] shadow-2xl px-16 flex gap-20 text-white items-center justify-between"
  >
    <div className="flex gap-8">
      <div className="px-4 py-2 hover:bg-[#22272c] transition-all duration-300 cursor-pointer">
        <a href="/"><MdHome className='w-5 h-5'/></a>
        
      </div>
      <div className="px-4 py-2 hover:bg-[#22272c] transition-all duration-300 cursor-pointer">
        <a href="/"><MdHub className='w-5 h-5'/></a>
        
      </div>
      <div className="px-4 py-2 hover:bg-[#22272c] transition-all duration-300 cursor-pointer">
        <FaHistory className='w-5 h-5'/>
      </div>
    </div>
    <ul className="flex gap-12">
      <li
        className="relative px-4 py-2 hover:bg-[#22272c] transition-all duration-300"
      >
        <a href="/">Projects</a>
      </li>

      <li
        className="relative px-4 py-2 hover:bg-[#22272c] transition-all duration-300"
      >
        <a href="/">Clients</a>
      </li>

      <li
        className="relative px-4 py-2 hover:bg-[#22272c] transition-all duration-300"
      >
        <a href="/">Calender</a>
      </li>

      <li
        className="relative px-4 py-2 hover:bg-[#22272c] transition-all duration-300"
      >
        <a href="/">Employees</a>
      </li>

      <li
        className="relative px-4 py-2 hover:bg-[#22272c] transition-all duration-300"
      >
        <a href="/">Admin</a>
      </li>
    </ul>
  </div> */}
        <video
        autoPlay
        muted
        loop
        id="myvideo"
        className="mx-auto w-full absolute -top-[px] -z-20 "
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
</header>
  )
}

export default Navbar