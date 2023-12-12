import React from "react";
import Photo from "../images/hh.jpg";
import Sidebar from "../pages/SideBar.jsx";
import Trends from "../pages/Trends.jsx";

function Username() {
  return (
    <div>
      <div className="username">
        <img src={Photo} alt="" />
      </div>
    </div>
  );
}

export default Username;
