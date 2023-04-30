import React from "react";
import MarketPlaceCard from "./MarketPlaceCard";

const MarketPlaceCards = () => {
  const data = [
    {
      url: "/images/cardImages/mr1.png",
      heading: "Space Runner",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
    {
      url: "/images/cardImages/mr2.png",
      heading: "Blankos Block Party",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
    {
      url: "/images/cardImages/mr3.png",
      heading: " Sensorium Galaxy",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
    {
      url: "/images/cardImages/mr4.png",
      heading: "The Fabricant",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
    {
      url: "/images/cardImages/mr5.png",
      heading: "Auroboros",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
    {
      url: "/images/cardImages/mr6.png",
      heading: "RTFKT Studios",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
    {
      url: "/images/cardImages/mr7.png",
      heading: "RTFKT Studios",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
    {
      url: "/images/cardImages/mr8.png",
      heading: "RTFKT Studios",
      author: "@kevin Funes",
      eth: "0.004ETH",
      likes: "1.4K Likes",
    },
  ];

  return (
    <div className="flex flex-wrap items-center lg:justify-between gap-8 justify-center ">
      {data.map((item, i) => (
        <div className=" grow">
          <MarketPlaceCard item={item} key={i} />
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceCards;
