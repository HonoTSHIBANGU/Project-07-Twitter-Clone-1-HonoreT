import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Tweets2 from "../components/Tweets2.jsx";
import Photo9 from "../images/tweet-profile-photo.png";
import Photo10 from "../images/Group.png";
import Photo12 from "../images/tweet-image.png";
import Photo11 from "../images/Tweet-Profile-Photo.svg";
import Photo13 from "../images/hh.jpg";
import Photo14 from "../images/Profile-Photo3.png";
import { tweets } from "../model/tweet.js";
import TweetsUser from "../components/TweetsUser.jsx";
import { users } from "../model/user.js";
import { TweetContext } from "../pages/useTweet.jsx";
import TweetEditor from "./TweetEditor.jsx";
import Home from "../pages/home.jsx";

function Tweets() {
  const ht = tweets.map((item) => {
    const user = users.find((user) => user.id === item.userId);

    return (
      <div key={item.id}>
        {/* <TweetsUser /> */}
        <div className="flex justify-start items-start gap-1.5 p-6 p-4 border-b border-[1px] border-solid border-[#2F3336]">
          <div className="flex-shrink-0 flex-grow-0 w-16 h-16 ">
            <Link to="/">
              {user.imageSrc && <img src={user.imageSrc} alt="" />}
            </Link>
          </div>

          <div className="flex flex-col items-start justify-start gap-30 w-full  ">
            <div className="flex  gap-2">
              {user.autor}
              {user.authorAvatarSrc && (
                <img src={user.authorAvatarSrc} alt="" />
              )}
              <p className="text-gray-500">{user.autorDetail}</p>
            </div>

            <div className="flex flex-col gap-4  p-4 ">
              <p className="relative right-4">{item.tweetText}</p>
              <div className="relative right-4">
                {user.Image && <img src={user.Image} alt="" />}
              </div>
            </div>
            <Tweets2 />
          </div>
        </div>
      </div>
    );
  });

  return <div>{ht}</div>;
}
export default Tweets;
