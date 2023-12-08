import React from "react";
import LogoTwitter from "../images/Twitter.png";
import Accueil from "../images/Home-Fill.png";
import Explore from "../images/Explore.png";
import Notifications from "../images/Notifications.png";
import Messages from "../images/Messages.png";
import Bookmarks from "../images/Bookmarks.png";
import Listes from "../images/Lists.png";
import Profile from "../images/Profile.png";
import More from "../images/More.png";
import avatar from "../images/profile-photo.png";
import key from "../images/ht.png";

function SideBar() {
  return (
    <div className="left-sidebar">
      <img src={LogoTwitter} alt="twitter-logo" />
      <ul className="link">
        <li className="link-li">
          <a href="">
            <img src={Accueil} alt="accueil" />
          </a>
          Home
        </li>
        <li className="link-li">
          <a href="">
            <img src={Explore} alt="" />
          </a>
          Explore
        </li>
        <li className="link-li">
          <a href="">
            <img src={Notifications} alt="" />
          </a>
          Notifications
        </li>
        <li className="link-li">
          <a href="">
            <img src={Messages} alt="" />
          </a>
          Messages
        </li>
        <li className="link-li">
          <a href="">
            <img src={Bookmarks} alt="" />
          </a>
          Bookmarks
        </li>
        <li className="link-li">
          <a href="">
            <img src={Listes} alt="" />
          </a>
          Listes
        </li>
        <li className="link-li">
          <a href="">
            <img src={Profile} alt="" />
          </a>
          Profile
        </li>
        <li className="link-li">
          <a href="">
            <img src={More} alt="" />
          </a>
          More
        </li>
      </ul>

      <div>
        <button className="bouton-tweet">Tweet</button>
      </div>

      <div className="conteneur">
        <div className="imageText">
          <button>
            <img className="profile-body" src={avatar} alt="" />
          </button>
          <div className="textDiv">
            <div className="division">
              <h1 className="text">Bradley Ortiz</h1>
              <img className="key" src={key} alt="cadenas" />
            </div>

            <h1 className="textContent">@Bradley</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
