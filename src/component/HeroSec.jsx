import React from "react";
import { PriBtn } from "./Button";

const HeroSec = () => {
  return (
    <div className="bg-black flex text-white justify-between  flex-wrap relative  w-full mx-auto">
      <div className="max-w-[90%] mx-auto">
        <div>
          <div>
            <img
              src="/images/b-sh1.png"
              alt="img"
              className="text-red z-0 absolute left-0 overflow-hidden"
            />
          </div>
          <div className=" pt-[15%] relative flex flex-row flex-wrap lg:justify-between justify-center">
            <div className="lg:basis-[65%]">
              <h1 className="text-white text-3xl lg:text-7xl leading-loose font-semibold lg:w-[80%]">
                Collect Digital Rare Art Discover Buy
                <span
                  className="p-5"
                  style={{
                    backgroundImage: 'url("images/b-sh9.png")',
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                  }}
                >
                  <span className="linertext">NFTs</span>
                </span>
              </h1>
              <p className="pb-12 pt-10 lg:w-[80%]">
                Digital Marketplace fr cryptocurrency Collectable and none
                Fungitable tokend (NFTs) buy,sell dan discover exclusive Digital
                arts
              </p>
              <PriBtn text="Discover Collection" />
            </div>
            <div className=" mt-20">
              <img
                src="/images/b-sh8.png"
                alt="img"
                className="lg:absolute lg:top-[15%] lg:right-0  overflow-visible"
              />
            </div>
          </div>

          <img
            src="/images/b-sh3.png"
            alt="img"
            className="absolute left-0 top-[30%] z-0"
          />
        </div>

        <div>
          <img
            src="/images/b-sh2.png"
            alt="img"
            className="hidden lg:absolute lg:right-0 lg:top-0 lg:w-[60%]"
          />

          <img
            src="/images/b-sh5.png"
            alt="ring"
            className="absolute top-[40%] lg:top-[50%] right-[30%] spin360"
          />
          <img
            src="/images/b-sh3.png"
            alt="img"
            width="30px"
            className="absolute top-[80%] right-[40%] z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
