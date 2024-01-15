import React from "react";
import { Link } from "react-router-dom";
import Profil1 from "../images/Profile-Photo2.png";
import Profil2 from "../images/Group.png";
import Profil3 from "../images/tweet-profile-photo.png";
import Profil4 from "../images/Profile-Photo3.png";

const followLists = [
  {
    logo: Profil1,
    button: "follow",
    avatar: Profil2,
    htag: "@nytimes",
    title2: "The New York Times",
  },
  {
    logo: Profil3,
    button: "follow",
    avatar: Profil2,
    htag: "@CNN",
    title2: "CNN",
  },
  {
    logo: Profil4,
    button: "follow",
    avatar: Profil2,
    htag: "@Twitter",
    title2: "Twitter",
  },
];

function Trends3() {
  const followList = followLists.map((item) => (
    <div className="flex flex-col  ">
      <div className="">
        <div className="flex gap-3 ">
          <Link to="/">
            <img className="profil2" src={item.logo} alt="" />
          </Link>
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
    </div>
  ));

  return <div>{followList} </div>;
}

export default Trends3;
