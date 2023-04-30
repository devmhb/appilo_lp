import React from "react";
import { SecBtn } from "../component/Button";

const MarketPlaceCard = ({ item }) => {
  return (
    <div className=" mt-8">
      <div className="bg-[#131923] p-5 text-center rounded-lg">
        <div>
          <img
            src={item.url}
            alt=""
            className="mx-auto w-full scale-100 transform ease-in duration-150 hover:scale-110"
          />
        </div>
        <h1 className=" text-2xl py-4 font-bold">{item.heading}</h1>
        <p className="pb-4 text-[#969696]"> @ kevin Funes</p>
        <div className="flex gap-4 pb-4 items-center justify-center">
          <div className="text-center">
            <img
              src="/images/cardImages/ic2-1.png"
              alt=""
              className="inline mr-2"
            />
            <span className=" text-[#02f740]">0.045 ETH</span>
          </div>
          <div>
            <img
              src="/images/cardImages/ic3-1.png"
              alt=""
              className="inline mr-2"
            />
            <span>1.4k Like</span>
          </div>
        </div>
        <SecBtn text="Place Bid" />
      </div>
    </div>
  );
};

export default MarketPlaceCard;
