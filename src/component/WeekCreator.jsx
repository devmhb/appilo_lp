import React from "react";

const WeekCreator = () => {
  return (
    <div className="bg-black text-white px-24 py-20 relative flex flex-col">
      <div className="border border-[#02F746] rounded linearbg py-20 px-4">
        <div className=" flex flex-col items-center justify-center gap-7 text-center">
          <h1 className="text-white font-bold text-[42px] pb-4">
            Top Creator this Week
          </h1>
          <p className="text-sm text-[#DADADA] w-[50%]">
            Secure, Rewarding, Lowest Fees and Unlimited Rewards. We Have it all
            to provide the best experience to buy your first Bitcoin.
          </p>
          <div className="">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-4 px-4 bg-[#1C1A1A] outline-none rounded-l-3xl h-14 border border-[#686868]"
            />
            <button className="subscribebtn h-14">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekCreator;
