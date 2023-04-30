import React from "react";
import { SecBtn } from "../component/Button";

const ExchangeCard = () => {
  return (
    <div className="flex gap-8 flex-wrap mt-10 justify-center items-center relative">
      <div className="lg:basis-[30%] bg-[#131923] px-4 py-6">
        <h1 className="flex items-center gap-5 font-bold text-2xl py-4">
          <span>
            <img src="/images/ic7-1.png" alt="" />
          </span>
          Secure storage
        </h1>
        <p className="pb-4 text-sm text-[#DADADA] leading-loose">
          The cold storage wallets are kept in geographically isolated locations
          at anonymous combinations of latitudes isolated locations longitudes.
        </p>
        <div className="w-[50%]">
          <SecBtn text="Explore more" />
        </div>
      </div>
      <div className="lg:basis-[30%] bg-[#131923] px-4 py-6">
        <h1 className="flex items-center gap-5 font-bold text-2xl py-4">
          <span>
            <img src="/images/ic6-1.png" alt="" />
          </span>
          Low Rates High Income
        </h1>
        <p className="pb-4 text-sm text-[#DADADA] leading-loose">
          The cold storage wallets are kept in geographically isolated locations
          at anonymous combinations of latitudes isolated locations longitudes.
        </p>
        <div className="w-[50%]">
          <SecBtn text="Explore more" />
        </div>
      </div>
      <div className="lg:basis-[30%] bg-[#131923] px-4 py-6">
        <h1 className="flex items-center gap-5 font-bold text-2xl py-4">
          <span>
            <img src="/images/ic5-1.png" alt="" />
          </span>
          Industry Best Practices
        </h1>
        <p className="pb-4 text-sm text-[#DADADA] leading-loose">
          The cold storage wallets are kept in geographically isolated locations
          at anonymous combinations of latitudes isolated locations longitudes.
        </p>
        <div className="w-[50%]">
          <SecBtn text="Explore more" />
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;
