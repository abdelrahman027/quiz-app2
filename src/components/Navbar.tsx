import React from 'react';
import logo from '../images/As.svg';
import avatar from '../images/sara.jpg';
import { FaBell } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa';

import { MdHome } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { MdHub } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import vid1 from '../images/vid.mp4';

const Navbar = () => {
    return (
        <header className="">
            <div className="bg-[#22272C] px-12 py-2 flex justify-between items-center text-white">
              <div className='bg-white/50 p-2 rounded-lg'>

                <img src={logo}  alt="logo" width={150}/>
              </div>
            </div>
        </header>
    );
};

export default Navbar;
