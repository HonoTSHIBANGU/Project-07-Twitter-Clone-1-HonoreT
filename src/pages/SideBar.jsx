import React from "react";
import SideBarTop from "./SideBarTop";
import SideBarBotton from "./SideBarBotton";

function SideBar() {
  return (
    <div className="sticky w-275px top-4 h-full left-30 ml-20   ">
      <SideBarTop />
      <SideBarBotton />
    </div>
  );
}

export default SideBar;
