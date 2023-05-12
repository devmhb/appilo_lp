import React from "react";
import { PriBtn } from "./Button";
import MarketPlaceCards from "./MarketPlaceCards";

const MarketPlace = () => {
  return (
    <div className="bg-black">
      <div className="bg-black text-white pt-32 max-w-[90%] mx-auto">
        <h1 className="text-center text-white text-4xl leading-tight font-semibold">
          NFT Market Place Hot Drops{" "}
          <span>
            <img src="/images/title-icon1.png" alt="icon" className="inline" />
          </span>
        </h1>
        <div className="flex items-center justify-center mt-12">
          <div className="mx-auto w-[70%] flex flex-wrap gap-5 justify-around">
            <PriBtn normal text="All Projects" />
            <PriBtn normal text="Music" />
            <PriBtn normal text="Art Collection" />
            <PriBtn normal text="Photography" />
            <PriBtn normal text="Trading Card" />
          </div>
        </div>
        <div className="pt-1rem">
          <MarketPlaceCards />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
