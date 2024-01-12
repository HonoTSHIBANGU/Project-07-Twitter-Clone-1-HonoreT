import React from "react";
import Profil1 from "../images/Profile-Photo2.png";
import Profil2 from "../images/Group.png";
import Profil3 from "../images/tweet-profile-photo.png";
import Profil4 from "../images/Profile-Photo3.png";

const followLists = [
  {
    title: "Who follow",
    guide: false,
    logo: Profil1,
    button: "follow",
    avatar: Profil2,
    htag: "@nytimes",
    title2: "The New York Times",
  },
  {
    title: false,
    guide: false,
    logo: Profil3,
    button: "follow",
    avatar: Profil2,
    htag: "@CNN",
    title2: "CNN",
  },
  {
    title: false,
    guide: "Show more",
    logo: Profil4,
    button: "follow",
    avatar: Profil2,
    htag: "@Twitter",
    title2: "Twitter",
  },
];

function Trends3() {
  const followList = followLists.map((item) => (
    <div>
      <div className="">
        <div className="p-4 ml-3 font-bold">
          <h3>{item.title} </h3>
        </div>
        <div className="flex gap-3 ml-3">
          <img className="profil2" src={item.logo} alt="" />
          <div className="titreab">
            <div className="times">
              <div className="titre0">{item.title2}</div>
              <img className="item" src={item.avatar} alt="" />
            </div>
            <div className="htagColor">{item.htag}</div>
          </div>
        </div>
        <button className="button2">{item.button} </button>
      </div>
      <div>
        <button className="show">
          <span>{item.guide} </span>
        </button>
      </div>
    </div>
  ));

  return <div>{followList} </div>;
}

export default Trends3;
