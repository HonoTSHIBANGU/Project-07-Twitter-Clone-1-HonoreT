import React from "react";
import logo from "../images/Timeline-Prop.png";

function header() {
  return (
    <div className="flex items-center justify-between border-b border-solid border-gray-700 py-2 px-4 ">
      <h1 className="text-lg font-bold">Home</h1>
      <img className="w-1.5rem h-auto" src={logo} alt="" />
    </div>
  );
}

export default header;
