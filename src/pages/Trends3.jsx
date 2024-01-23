import React from "react";
import { Link } from "react-router-dom";
import Profil1 from "../images/Profile-Photo2.png";
import Profil2 from "../images/Group.png";
import Profil3 from "../images/tweet-profile-photo.png";
import Profil4 from "../images/Profile-Photo3.png";
import users from "../model/user";

// const followLists = [
//   {
//     logo: Profil1,
//     button: "follow",
//     avatar: Profil2,
//     htag: "@nytimes",
//     title2: "The New York Times",
//   },
//   {
//     logo: Profil3,
//     button: "follow",
//     avatar: Profil2,
//     htag: "@CNN",
//     title2: "CNN",
//   },
//   {
//     logo: Profil4,
//     button: "follow",
//     avatar: Profil2,
//     htag: "@Twitter",
//     title2: "Twitter",
//   },
// ];

function Trends3() {
  const followList = users.map((item, i) => (
    <div className="flex flex-col  " key={i}>
      <div className="">
        <div className="flex gap-3 ">
          <Link to={`/${item.autor}`}>
            <img className="profil2" src={item.imageSrc} alt="" />
          </Link>
          <div className="titreab">
            <div className="times">
              <div className="titre0">{item.autor}</div>
              <img className="item" src={item.authorAvatarSrc} alt="" />
            </div>
            <div className="htagColor">{item.autorDetail}</div>
          </div>
        </div>
        <button className="button2">{item.button} </button>
      </div>
    </div>
  ));

  return <div>{followList} </div>;
}

export default Trends3;
