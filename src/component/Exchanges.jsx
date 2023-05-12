import React from "react";
import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  return (
    <div className="bg-black text-white py-20 relative">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className=" text-4xl">
            <span>
              <img src="/images/title-icon3.png" alt="" className="inline" />
            </span>
            The most trusted NFTs exchange
            <span>
              <img src="/images/title-icon3.png" alt="" className="inline" />
            </span>
          </h1>
          <p className="text-center text-sm text-[#DADADA] pt-6 lg:w-[50%]">
            Secure, Rewarding, Lowest Fees and Unlimited Rewards. We Have it all
            to provide the best experience to buy your first Bitcoin.
          </p>
        </div>
        <img
          src="/images/b-sh1.png"
          alt=""
          className="absolute left-[-60%] top-0 lg:left-[-25%] lg:top-[10%] overflow-visible"
        />
        <ExchangeCard />
      </div>
    </div>
  );
};

export default Exchanges;
