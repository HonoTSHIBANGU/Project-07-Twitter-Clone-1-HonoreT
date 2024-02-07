import icon1 from "../images/img.png";
import icon2 from "../images/Gif.png";
import icon3 from "../images/Poll.png";
import icon4 from "../images/Emoji.png";
import icon5 from "../images/Schedule.png";
import userPerso from "../model/userPerso.js";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { TweetContext } from "../contexte/TweetProvider.jsx";
import photo from "../images/hh.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";

function TweetEditor() {
  const [tweetAdd, setTweetAdd] = useContext(TweetContext);
  // console.log(tweetAdd);
  const [inputTweet, setInputTweet] = useState("");

  const addTweet = (inputT) => {
    if (inputT !== "") {
      const tweetPending = {
        id: 3,
        userId: 3,
        tweetText: inputT,
      };

      setTweetAdd((e) => [tweetPending, ...tweetAdd]);
    }
  };

  const tweetInput = (e) => {
    setInputTweet(e.target.value);
  };
  const button = () => {
    addTweet(inputTweet);
  };

  return (
    <div className="flex items-start justify-start gap-16 p-3 border-b border-solid border-gray-700">
      <aside>
        <Link to="/Profil">
          <img
            className="h-16 w-16 rounded-full relative left-2 top-5 "
            src={userPerso.imageSrc}
            alt=""
          />
        </Link>
      </aside>

      <div>
        <form className="flex-auto ">
          <input
            className="h-37 w-full border-none outline-none text-1.3rem bg-black text-white resize-none pt-10 pr-0 pb-0 pl-0 mt-13 mb-0"
            type="text"
            placeholder="What's happening?"
            onChange={tweetInput}
            value={inputTweet}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-4">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
            </div>
            <button
              className="capitalize px-3 py-0.5 border-none rounded-full bg-blue-500 text-white text-lg relative left-60"
              onClick={(e) => {
                e.preventDefault();
                button();
              }}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetEditor;
