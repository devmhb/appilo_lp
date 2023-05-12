import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsBehance, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="py-20 max-w-[90%] mx-auto flex flex-wrap justify-center gap-12 lg:justify-between">
        <div>
          <img
            src="/images/25_coming_soon_logo-1.png"
            alt=""
            className="mb-5"
          />
          <h5 className=" font-bold text-lg pb-4">
            Get The Latest Glow Updates
          </h5>
          <div className="relative">
            <input
              type="email"
              className="lg:min-w-[20rem] py-5 px-5 bg-[#1C1A1A] outline-none rounded-[50px]  border border-[#686868]"
              placeholder="Enter your email"
            />
            <button className="absolute right-[5%] top-[15%] pribtn">
              Subscribe
            </button>
          </div>
          <div>
            <h6 className=" font-bold text-lg py-4">Join Conversation</h6>
            <div className="flex flex-row gap-4">
              <a
                href="#_"
                class="bg-[#131923] w-10 h-10 rounded-full flex items-center justify-center cursor-pointe relative  group px-3.5 py-2 m-1 cursor-pointer active:border-purple-600 active:shadow-none shadow-lg  text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-to-r from-green-600 to-blue-600 rounded-full group-hover:w-10 group-hover:h-10 opacity-100"></span>
                <span class="relative">
                  <FaFacebookF />
                </span>
              </a>
              <a
                href="#_"
                class="bg-[#131923] w-10 h-10 rounded-full flex items-center justify-center cursor-pointe relative  group px-3.5 py-2 m-1 cursor-pointer active:border-purple-600 active:shadow-none shadow-lg  text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-to-r from-green-600 to-blue-600 rounded-full group-hover:w-10 group-hover:h-10 opacity-100"></span>
                <span class="relative">
                  <BsTwitter />
                </span>
              </a>
              <a
                href="#_"
                class="bg-[#131923] w-10 h-10 rounded-full flex items-center justify-center cursor-pointe relative  group px-3.5 py-2 m-1 cursor-pointer active:border-purple-600 active:shadow-none shadow-lg  text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-to-r from-green-600 to-blue-600 rounded-full group-hover:w-10 group-hover:h-10 opacity-100"></span>
                <span class="relative">
                  <BsBehance />
                </span>
              </a>
              <a
                href="#_"
                class="bg-[#131923] w-10 h-10 rounded-full flex items-center justify-center cursor-pointe relative  group px-3.5 py-2 m-1 cursor-pointer active:border-purple-600 active:shadow-none shadow-lg  text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-to-r from-green-600 to-blue-600 rounded-full group-hover:w-10 group-hover:h-10 opacity-100"></span>
                <span class="relative">
                  <FaInstagram />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl pb-4">Usefull Links</h2>
          <ul className="text-[#D7D7D7] text-sm font-semibold flex flex-col gap-4">
            <li>Explore</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Become a partner</li>
            <li>Bug Bounty</li>
            <li>Creators</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-2xl pb-4">Community</h2>
          <ul className="text-[#D7D7D7] text-sm font-semibold flex flex-col gap-4">
            <li>About</li>
            <li>Blog post</li>
            <li>SaaSio Token</li>
            <li>Featured of SaaSio</li>
            <li>Saasio Protocol</li>
            <li>Subscribe</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-2xl pb-4">Language</h2>
          <select
            name=""
            id=""
            className="bg-[#131923] text-white  py-4 px-8 rounded-[50px] border-none outline-none cursor-pointer"
          >
            <option value="">English</option>
            <option value="">Spenish</option>
            <option value="">Hindi</option>
            <option value="">Bangla</option>
          </select>
          <div className="flex gap-4 mt-6">
            <img src="/images/fg2.png" alt="img" />
            <div>
              <img src="/images/fg1.png" alt="img" />
              <h6 className="text-sm font-semibold mt-1">
                Certified Infrastructure
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
