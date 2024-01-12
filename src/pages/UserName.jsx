import React from "react";
import Photo from "../images/hh.jpg";

function Username() {
  return (
    <div className="border border-l-1 border-r-1 border-[#2F3336] px-60 ">
      <div className="">
        <img
          className="w-60 h-60 rounded-full relative right-6 top-40"
          src={Photo}
          alt=""
        />
        <h3 className="relative right-6 top-60">TSHIBANGU Honoré</h3>
      </div>
    </div>
  );
}

export default Username;
