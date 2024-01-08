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
    <div className="background2">
      <div className="trendTitle">
        <div className="title2">
          <h3>{item.title}</h3>
        </div>
        <div className="img2">
          <h3>
            <img src={item.img} alt="" />
          </h3>
        </div>
      </div>
      <div className="div2">
        <div className="from">{item.from}</div>
        <div>{item.point} </div>
      </div>
      <span className="htag">{item.htag}</span>

      <div className="from1">{item.number}</div>

      <button className=" color1">{item.guide}</button>
    </div>
  ));

  return <div>{trendslist}</div>;
}
export default Trends2;
