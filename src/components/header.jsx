import React from "react";
import logo from "../images/Timeline-Prop.png";

function header() {
  return (
    <div className="p-2 px-4 flex items-center justify-between border-b-2F3336 ">
      <h1 className="page-title">Home</h1>
      <img className="top-tweets" src={logo} alt="" />
    </div>
  );
}

export default header;
