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
import Profil from "../images/Profile.png";
// import Username from "../pages/UserName";

const navItems = [
  { logo: LogoTwitter, title: "", link: false },
  { logo: Accueil, title: "Home", link: "/" },
  { logo: Explore, title: "Explore", link: "/explore" },
  { logo: Notifications, title: "Notifications", link: "/notification" },
  { logo: Messages, title: "Messages", link: "/message" },
  { logo: Bookmarks, title: "Bookmarks", link: "/bookmark" },
  { logo: Listes, title: "Listes", link: "/liste" },
  { logo: Profil, title: "Profile", link: "/profil" },
  { logo: More, title: "More", link: "/more" },
];

function SideBarTop() {
  const topBar = navItems.map((item, i) => (
    <div className="p-3" key={i}>
      <NavLink to={item.link}>
        <div className="flex gap-8">
          <div>
            <img src={item.logo} alt="" />
          </div>
          <div>
            <p>{item.title}</p>
          </div>
        </div>
      </NavLink>
    </div>
  ));
  return <div>{topBar}</div>;
}
export default SideBarTop;
