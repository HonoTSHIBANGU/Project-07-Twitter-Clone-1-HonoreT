import React from "react";
import Search from "../images/Search.png";
import Settings from "../images/Settings.png";
import Trends2 from "../pages/Trends2.jsx";

const Trends = [
  { setting: Settings, title: "Trends for you" },
  {
    cityTweet: "Trending in Turkey",
    htag: "#SQUID",
    numbersTweets: "2,066 Tweets",
    point: "...",
  },
  {
    cityTweet: "Trending in Turkey",
    htag: "#SQUID",
    numbersTweets: "2,066 Tweets",
    point: "...",
  },
  {
    cityTweet: "Trending in Turkey",
    htag: "#SQUID",
    numbersTweets: "2,066 Tweets",
    point: "...",
  },
  {
    cityTweet: "Trending in Turkey",
    htag: "#SQUID",
    numbersTweets: "2,066 Tweets",
    point: "...",
  },
  { text: "show more" },
];

function Trendstweet() {
  const trendContent = Trends.map((item, i) => (
    <div className="background" key={i}>
      <div className="titre">
        {item.title}
        <a href="">
          <img src={item.setting} alt="" />
        </a>
      </div>
      <div className="settingsparent" key={i}>
        <div className="separate">
          <p className="settings">{item.cityTweet}</p>
          <p className="settings1">
            <span>{item.htag}</span>
          </p>
          <p className="settings">{item.numbersTweets}</p>
        </div>

        <div className="setting">
          <p>{item.point} </p>
        </div>
      </div>

      <div className="text">{item.text} </div>
    </div>
  ));

  return (
    <div className="space">
      <div>
        <img src={Search} alt="" />
        <input type="texte" placeholder="" />
      </div>

      <div>{trendContent} </div>
      <Trends2 />
    </div>
  );
}

export default Trendstweet;
