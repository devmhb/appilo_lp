import React from "react";
import CreatorCard from "./CreatorCard";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Creator = () => {
  const data = [
    {
      url: "/images/creatorsimg/tc1.png",
      heading: "Space Runner",
      author: "@kevin Funes",
      likes: "1.4K Likes",
    },
    {
      url: "/images/creatorsimg/tc2.png",
      heading: "Blankos Block Party",
      author: "@kevin Funes",
      likes: "1.4K Likes",
    },
    {
      url: "/images/creatorsimg/tc3.png",
      heading: " Sensorium Galaxy",
      author: "@kevin Funes",
      likes: "1.4K Likes",
    },
    {
      url: "/images/creatorsimg/tc4.png",
      heading: "The Fabricant",
      author: "@kevin Funes",
      likes: "1.4K Likes",
    },
    {
      url: "/images/creatorsimg/tc5.png",
      heading: "Auroboros",
      author: "@kevin Funes",
      likes: "1.4K Likes",
    },
    {
      url: "/images/creatorsimg/tc6.png",
      heading: "RTFKT Studios",
      author: "@kevin Funes",
      likes: "1.4K Likes",
    },
  ];

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-[90%] mx-auto">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">
            Top Creator this Week{" "}
            <span>
              <img
                src="/images/title-icon2.png"
                alt="icon"
                className="inline"
              />
            </span>
          </h1>
          <div className="hidden lg:flex ">
            <a
              href="#_"
              class="linearbg border-[2px] border-[#02f7461a] w-10 h-10 rounded-full flex items-center justify-center cursor-pointe relative  group px-3.5 py-2 m-1 cursor-pointer active:border-purple-600 active:shadow-none shadow-lg  text-white"
            >
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-to-r from-green-600 to-blue-600 rounded-full group-hover:w-10 group-hover:h-10 opacity-100"></span>
              <span class="relative">
                <AiOutlineArrowLeft />
              </span>
            </a>
            <a
              href="#_"
              class="linearbg border-[2px] border-[#02f7461a] w-10 h-10 rounded-full flex items-center justify-center cursor-pointe relative  group px-3.5 py-2 m-1 cursor-pointer active:border-purple-600 active:shadow-none shadow-lg  text-white"
            >
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-to-r from-green-600 to-blue-600 rounded-full group-hover:w-10 group-hover:h-10 opacity-100"></span>
              <span class="relative">
                <AiOutlineArrowRight />
              </span>
            </a>
          </div>
        </div>
        <p className=" w-full lg:w-[60%]  mt-4 leading-8">
          Secure, Rewarding, Lowest Fees and Unlimited Rewards. We Have it all
          to provide the best experience to buy your first Bitcoin.
        </p>
        <div className=" w-full flex flex-wrap gap-8 justify-center pt-10">
          {data.map((item) => (
            <CreatorCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creator;
