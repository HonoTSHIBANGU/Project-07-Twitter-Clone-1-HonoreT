import React from "react";
import Setting from "../images/Settings.png";

const trendsLists = [
  {
    img: Setting,
    title: "Trends for you",
    from: "Trending in Turkey",
    htag: "#SQUID",
    number: "2,066 Tweets",
    point: "...",
    guide: false,
  },
  {
    img: false,
    title: false,
    from: "Trending in Turkey",
    htag: "#SQUID",
    number: "2,066 Tweets",
    point: "...",
    guide: false,
  },
  {
    img: false,
    title: false,
    from: "Trending in Turkey",
    htag: "#SQUID",
    number: "2,066 Tweets",
    point: "...",
    guide: false,
  },
  {
    img: false,
    title: false,
    from: "Trending in Turkey",
    htag: "#SQUID",
    number: "2,066 Tweets",
    point: "...",
    guide: "Show more",
  },
];

function Trends2() {
  const trendslist = trendsLists.map((item) => (
    <div className=" ">
      <div className="flex justify-between ml-2 ">
        <h3 className="p-2">{item.title}</h3>
        <div>
          <img className="mr-3 relative top-2" src={item.img} alt="" />
        </div>
      </div>

      <div className="flex justify-between">
        <p className="from">{item.from}</p>
        <p className="relative mr-4">{item.point} </p>
      </div>
      <p>
        <span className="relative ml-6  ">{item.htag}</span>
      </p>

      <p className="relative text-gray-500 ml-6 ">{item.number}</p>

      <button className="text-blue-500 bg-transparent ml-6 m-2 font-bold ">
        {item.guide}
      </button>
    </div>
  ));

  return <div>{trendslist}</div>;
}
export default Trends2;
