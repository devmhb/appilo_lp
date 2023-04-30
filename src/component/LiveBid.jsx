import React from "react";
import LiveBidSliderCard from "./LiveBidSliderCard";

const LiveBid = () => {
  return (
    <div className="bg-black text-white ">
      <div className="max-w-[90%] mx-auto text-center">
        <div>
          <h1 className="text-white text-4xl leading-tight font-semibold">
            Your All live Bids
            <span>
              <img
                src="/images/title-icon4.png"
                alt="title_icon"
                className="inline ml-4"
              />
            </span>
          </h1>
          <p className="text-center text-sm text-[#DADADA] pt-6 lg:w-[50%] mx-auto leading-loose">
            Secure, Rewarding, Lowest Fees and Unlimited Rewards. We Have it all
            to provide the best experience to buy your first Bitcoin.
          </p>
        </div>
        <div className="text-center">
          <LiveBidSliderCard />
        </div>
      </div>
    </div>
  );
};

export default LiveBid;
