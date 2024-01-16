import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/SideBar.jsx";
import Trends from "../pages/Trends.jsx";

function Layout({ children }) {
  return (
    <>
      <SideBar />

      <Outlet />

      <Trends />
    </>
  );
}

export default Layout;
