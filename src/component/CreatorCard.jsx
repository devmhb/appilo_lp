import React from "react";

const CreatorCard = ({ item }) => {
  return (
    <div className="bg-[#131923] rounded-lg">
      <div className="flex flex-row p-4 gap-6 items-center justify-center">
        <img
          src={item.url}
          alt=""
          className="border border-[#131923] rounded-full h-fit"
        />
        <div>
          <h2 className=" font-bold text-xl">Brooklyen Simmones</h2>
          <p className="text-[#969696] py-3">@ kevin powell</p>
          <div className="">
            <img
              src="/images/cardImages/ic2-1.png"
              alt=""
              className="inline mr-2"
            />
            <span className=" text-[#02f740]">0.045 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
