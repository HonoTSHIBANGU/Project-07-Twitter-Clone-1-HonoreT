import React from "react";
import avatar from "../images/hh.jpg";
import icon1 from "../images/img.png";
import icon2 from "../images/Gif.png";
import icon3 from "../images/Poll.png";
import icon4 from "../images/Emoji.png";
import icon5 from "../images/Schedule.png";

function TweetEditor() {
  return (
    <div className="flex items-start justify-start gap-16 p-3 border-b border-solid border-gray-700">
      <aside>
        <img
          className="h-16 w-16 rounded-full relative left-2 top-5 "
          src={avatar}
          alt=""
        />
      </aside>

      <div className="flex-auto ">
        <input
          className="h-37 w-full border-none outline-none text-1.3rem bg-black text-white resize-none pt-10 pr-0 pb-0 pl-0 mt-13 mb-0"
          type="text"
          placeholder="What's happening?"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
          </div>
          <button className="capitalize px-3 py-0.5 border-none rounded-full bg-blue-500 text-white text-lg">
            <span>Tweet</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
