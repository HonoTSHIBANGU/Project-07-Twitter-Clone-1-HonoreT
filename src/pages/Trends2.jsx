import React from "react";

const trendsLists = [
  {
    from: "Trending in Turkey",
    point: "...",
    htag: "#SQUID",
    number: "2,066 Tweets",
  },
  {
    from: "Trending in Turkey",
    point: "...",
    htag: "#SQUID",
    number: "2,066 Tweets",
  },
  {
    from: "Trending in Turkey",
    point: "...",
    htag: "#SQUID",
    number: "2,066 Tweets",
  },
  {
    from: "Trending in Turkey",
    point: "...",
    htag: "#SQUID",
    number: "2,066 Tweets",
  },
];

function Trends2() {
  const trendslist = trendsLists.map((item, i) => (
    <div className="flex flex-col p-2 " key={i}>
      <div className="flex justify-between ">
        <p className=" text-gray-500">{item.from} </p>
        <p>{item.point} </p>
      </div>
      <div>{item.htag} </div>
      <div className=" text-gray-500">{item.number} </div>
    </div>
  ));

  return <div>{trendslist}</div>;
}
export default Trends2;
