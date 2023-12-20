import React from "react";
import { NavLink } from "react-router-dom";
import SideBarTop from "./SideBarTop";
import SideBarBotton from "./SideBarBotton";

function SideBar() {
  return (
    <div className="left-sidebar">
      <SideBarTop />
      <SideBarBotton />
    </div>
  );
}

export default SideBar;
