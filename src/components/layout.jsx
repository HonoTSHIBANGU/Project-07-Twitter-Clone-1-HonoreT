import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/SideBar.jsx";
import Trends from "../pages/Trends.jsx";

function Layout({ children }) {
  return (
    <>
      <div className="left-sidebar" />
      {children}
      <div className="right-sidebar" />
    </>
  );
}

export default Layout;
