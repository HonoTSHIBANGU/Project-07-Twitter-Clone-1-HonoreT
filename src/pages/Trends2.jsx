import React from "react";
import Photo9 from "../images/tweet-profile-photo.png";
import Photo10 from "../images/Group.png";
import Photo11 from "../images/Profile-Photo3.png";
import PhotoProfile2 from "../images/Profile-Photo2.png";

const trends2 = [
  { title3: "Who Follow", imageSrc: false },
  {
    autor: "The New York Times",
    autorDetail: "@anytimes",
    tweetText: "Follow",
    imageSrc: PhotoProfile2,
    authorAvatarSrc: Photo10,
  },
  {
    autor: "CNN",
    autorDetail: "@CNN",
    tweetText: "Follow",
    imageSrc: Photo9,
    authorAvatarSrc: Photo10,
  },
  {
    autor: "Twitter",
    autorDetail: "@Twitter",
    tweetText: "Follow.",
    imageSrc: Photo11,
    authorAvatarSrc: Photo10,
  },
  { paragraph1: "Show more" },
];

function Trends2() {
  const trends3 = trends2.map((item, i) => (
    <div className="back" key={i}>
      <div>
        <div>{item.title3}</div>
      </div>

      <div className="division">
        <div className="image">
          <img src={item.imageSrc} alt="" />
        </div>

        <div className="div">
          <div className="author1">
            <p>{item.autor} </p>
            <img src={item.authorAvatarSrc} alt="" />
          </div>

          <div>{item.autorDetail}</div>
        </div>

        <div className="tweettext">{item.tweetText} </div>
      </div>
      <div>{item.paragraph1} </div>
    </div>
  ));

  return <div>{trends3} </div>;
}

export default Trends2;
