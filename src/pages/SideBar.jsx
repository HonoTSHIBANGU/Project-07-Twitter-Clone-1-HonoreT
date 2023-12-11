import React from "react";
import { NavLink } from "react-router-dom";
import LogoTwitter from "../images/Twitter.png";
import Accueil from "../images/Home-Fill.png";
import Explore from "../images/Explore.png";
import Notifications from "../images/Notifications.png";
import Messages from "../images/Messages.png";
import Bookmarks from "../images/Bookmarks.png";
import Listes from "../images/Lists.png";
import More from "../images/More.png";
import avatar from "../images/hh.jpg";
import key from "../images/ht.png";

function SideBar() {
  return (
    <div className="left-sidebar">
      <img src={LogoTwitter} alt="twitter-logo" />
      <ul className="link">
        <li>
          <NavLink to="/" className="link-li">
            <img className="navlink" src={Accueil} alt="accueil" />
            Home
          </NavLink>
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
            <img src={More} alt="" />
          </a>
          Profil
        </li>

        <li className="link-li">
          <a href="">
            <img src={More} alt="" />
          </a>
          More
        </li>
      </ul>
      <div className="footer">
        <button className="bouton-tweet">Tweet</button>
        <div>
          <div className="conteneur">
            <div className="imageText">
              <NavLink to="/username">
                <img className="profile-body" src={avatar} alt="" />
              </NavLink>
              <div className="textDiv">
                <div className="division">
                  <h1 className="text">Honore TSHIBANGU</h1>
                  <img className="key" src={key} alt="cadenas" />
                </div>
                <h1 className="textContent">@Honore</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
