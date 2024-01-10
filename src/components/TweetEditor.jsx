import React from "react";
import avatar from "../images/hh.jpg";
import icon1 from "../images/img.png";
import icon2 from "../images/Gif.png";
import icon3 from "../images/Poll.png";
import icon4 from "../images/Emoji.png";
import icon5 from "../images/Schedule.png";

function TweetEditor() {
  return (
    <div className="flex flex items-start flex justify-start gap-20 py-12 px-4 border-b border-b-1 border-b-solid border-b-#2F3336">
      <aside className="avatar">
        <img src={avatar} alt="" />
      </aside>

      <div className="flex-auto">
        <input
          className="h-60 w-full border-none outline-none text-1.3rem bg-black text-white resize-none pt-10 my-13     "
          type="text"
          placeholder="What's happening?"
        />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
          </div>
          <div className="button">Tweet</div>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
