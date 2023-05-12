import React from "react";

const LiveBidSliderCard = () => {
  return (
    <div className="linearbg mx-auto mt-20 border-[2px] border-[#3003c4] p-10">
      <div className="flex justify-between">
        <div className="basis-[50%]">
          <div className="flex justify-center gap-5 lg:justify-between flex-wrap ">
            <h4 className="font-bold text-2xl ">Diamond Horses Art #57</h4>
            <div>
              <span className="bg-[#FF3E76] p-2 mr-4">❤ 22</span>
              <span className="bg-[#3003c4] py-2 px-4">↪</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5 py-8 border-b border-[#02f7461a]">
            <img src="/images/bid-ath.png" alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">Created By</p>
              <h6 className="font-bold text-xl">@ kevin Funes</h6>
            </div>
          </div>

          <div className="py-8 text-left">
            <h6 className="mb-4 font-bold">Project's Ending:</h6>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-center justify-center linearbg text-sm w-[3.5rem] h-[3.5rem] border border-[#02F746] rounded-full">
                <span>00</span>
                <span>Days</span>
              </div>
              <div className="flex flex-col items-center justify-center linearbg text-sm w-[3.5rem] h-[3.5rem] border border-[#02F746] rounded-full">
                <span>00</span>
                <span>Hours</span>
              </div>
              <div className="flex flex-col items-center justify-center linearbg text-sm w-[3.5rem] h-[3.5rem] border border-[#02F746] rounded-full">
                <span>00</span>
                <span>Mins</span>
              </div>
              <div className="flex flex-col items-center justify-center linearbg text-sm w-[3.5rem] h-[3.5rem] border border-[#02F746] rounded-full">
                <span>00</span>
                <span>Secs</span>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h6 className="mb-4 font-bold">Floor price</h6>
            <div className="flex gap-4">
              <button className="secbtn w-fit py-2 px-4">8.803ETH</button>
              <button className="secbtn w-fit py-2 px-4">Place a Bid</button>
            </div>
          </div>
        </div>

        <div>
          <img src="/images/bid.png" alt="img" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LiveBidSliderCard;
