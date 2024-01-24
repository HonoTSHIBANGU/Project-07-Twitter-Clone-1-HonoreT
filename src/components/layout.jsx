import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/SideBar.jsx";
import Trends from "../pages/Trends.jsx";
import TweetProvider from "../contexte/TweetProvider.jsx";

function Layout({ children }) {
  return (
    <TweetProvider>
      <>
        <SideBar />
        <Outlet />
        <Trends />
      </>
    </TweetProvider>
  );
}

export default Layout;
