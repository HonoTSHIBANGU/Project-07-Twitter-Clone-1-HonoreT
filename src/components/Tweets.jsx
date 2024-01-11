import React from "react";
import Tweets2 from "../components/Tweets2.jsx";
import Photo9 from "../images/tweet-profile-photo.png";
import Photo10 from "../images/Group.png";
import Photo12 from "../images/tweet-image.png";
import Photo11 from "../images/Tweet-Profile-Photo.svg";
import Photo13 from "../images/hh.jpg";

const tweets = [
  {
    autor: "CNN",
    autorDetail: "@CNN",
    tweetText:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    imageSrc: Photo9,
    Image: false,
    authorAvatarSrc: Photo10,
  },
  {
    autor: "The New York Times",
    autorDetail: "@anytimes",
    tweetText:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
    imageSrc: Photo11,
    Image: Photo12,
    authorAvatarSrc: Photo10,
  },
  {
    autor: "Twitter",
    autorDetail: "@Twitter",
    tweetText: "BIG NEWS lol jk still Twitter.",
    imageSrc: false,
    Image: Photo13,
    authorAvatarSrc: Photo10,
  },
];

function Tweets() {
  const ht = tweets.map((item) => (
    <div>
      <div className="flex justify-start items-start gap-1.5 p-6 p-4 border-b border-[1px] border-solid border-[#2F3336]">
        <div className="flex-shrink-0 flex-grow-0 w-16 h-16 ">
          {item.imageSrc && <img src={item.imageSrc} alt="" />}
        </div>
        <div className="flex flex-col items-start justify-start gap-30 w-full ">
          <div className="flex flex-col m-2">
            <div className="flex justify-start gap-2 text-base">
              <div className="text-base">
                <p>{item.autor}</p>
              </div>
              <div>
                <img src={item.authorAvatarSrc} alt="" />
              </div>
              <div className="text-gray-600">
                <p>{item.autorDetail}</p>
              </div>
            </div>
            <p>{item.tweetText}</p>
            <div className="w-full pt-3 pl-0 pr-0 pb-0 ">
              {item.Image && <img src={item.Image} alt="" />}
            </div>
          </div>
          <Tweets2 />
        </div>
      </div>
    </div>
  ));

  return <div>{ht}</div>;
}
export default Tweets;
