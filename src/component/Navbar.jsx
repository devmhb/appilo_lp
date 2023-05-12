import React from "react";
// import { PriBtn } from "./Button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 overflow-hidden z-50 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 pb-[2px]">
      <div className="flex justify-evenly items-center bg-[#131923] py-6 ">
        <div className=" max-w-[60%] lg:max-w-[40%]  ml-12 mr-12">
          <img src="/images/logo512.png" alt="logo" />
        </div>
        <div className="flex justify-evenly items-center w-full">
          <ul className="hidden lg:flex justify-evenly basis-[60%] text-white gap-12 text-lg ">
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-green-400">
              Demos
            </li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-green-400">
              Market
            </li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-green-400">
              Creator
            </li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-green-400">
              FAQ
            </li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-green-400">
              Live Bid
            </li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-green-400">
              Blog
            </li>
          </ul>
        </div>
        <button className="pribtn mr-6 w-fit">Button</button>
      </div>
    </nav>
  );
};

export default Navbar;
