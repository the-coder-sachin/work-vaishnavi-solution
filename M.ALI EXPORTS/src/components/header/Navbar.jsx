import React from 'react'
import {asset}  from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className="flex bg-neutral-800 px-12 py-8">
      <div className="logo w-[300px] flex items-center gap-1 ">
        <img src={asset.logo} alt="" className="h-10 w-fit cursor-pointer" />
        <h1 className="text-white font-bold text-nowrap cursor-pointer">
          M. <span className='text-green-400'>ALI</span>
        </h1>
      </div>
      <ul className="text-white justify-between items-center w-full text-[15px] font-semibold hidden sm:flex">
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          home
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          about
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          services
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          FAQ
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          contacts
        </li>
      </ul>
      <div className="sign ml-20 sm:hidden md:block">
        <button className="bg-amber-400 font-semibold capitalize text-white px-4 py-1 rounded-md hover:text-black hover:bg-white transition-all duration-150 ease-in-out cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar