import React from "react";
import Photo from "../images/hh.jpg";
import userPerso from "../model/userPerso.js";

function Username() {
  return (
    <div className="border border-l-1 border-r-1 border-[#2F3336] px-60 ">
      <div className="">
        <img
          className="w-60 h-60 rounded-full relative right-60 top-40"
          src={userPerso.imageSrc}
          alt=""
        />
        <h3 className="relative right-60 top-60">{userPerso.autor} </h3>
      </div>
    </div>
  );
}

export default Username;
