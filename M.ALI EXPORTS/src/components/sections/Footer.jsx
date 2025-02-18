import React from 'react'
import { asset } from '../../assets/assets'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col md:flex-row lg:items-start items-center bg-neutral-800 px-12 py-8 gap-4 justify-between">
          <div className="flex gap-3 flex-col lg:flex-row justify-center items-center">
            <div className="logo w-[100px] flex items-center gap-1 cursor-pointer">
              <img
                src={asset.logo}
                alt=""
                className="h-10 w-fit cursor-pointer "
              />
              <h1 className="text-white font-bold text-nowrap cursor-pointer">
                M. <span className="text-green-400">ALI</span>
              </h1>
            </div>
            <div className="flex flex-col text-neutral-300 text-sm gap-3 items-center">
              <p>M.ALI EXPORTS PRIVATE LIMITED</p>
              <p className="capitalize">
                OUR GOAL IS TO INCREASE YOUR BUSINESS
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <ul className="flex gap-2 text-neutral-400 justify-between">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Help</li>
            </ul>
            <div className="flex text-neutral-200 gap-3">
              <p className="flex gap-2">
                M.ALI@mail.com
                <span>
                  <img src={asset.gmail} alt="mail" className="h-6" />
                </span>
              </p>
              <p className="flex gap-2">
                000-0000-0000{" "}
                <span>
                  <img src={asset.call} alt="call" className="h-6" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p className='bg-neutral-900 text-neutral-400 text-center'>©2025 @M.Ali All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer