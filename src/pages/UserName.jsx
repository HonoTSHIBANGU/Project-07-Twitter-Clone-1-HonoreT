import React from "react";
import Photo from "../images/hh.jpg";
import userPerso from "../model/userPerso.js";
import backIcone from "../images/backicone2.jpeg";
import home from "./Home.jsx";
import { Link } from "react-router-dom";

function Username() {
  return (
    <div className="border-b border-[1px] border-solid border-[#2F3336] ml-20 mr-8 flex-1 flex-shrink-0 basis-800">
      <Link to="/">
        <div className="flex ">
          <div>
            <img
              className="w-8 h-4  m-5  relative bottom-1"
              src={backIcone}
              alt=""
            />
          </div>
          <div className="flex gap-2 relative top-2">
            <h1 className="text-lg font-bold">{userPerso.autor}</h1>

            <img
              className="w-5 h-5 relative top-1 "
              src={userPerso.authorAvatarSrc}
              alt=""
            />
          </div>
        </div>
      </Link>
      <div className="relative bottom-2 ">
        <img className="w-full h-60" src={userPerso.coverPhoto} alt="" />
      </div>
      <div className="relative bottom-10 left-6 w-40 h-20">
        <img className="w-24 h-24" src={userPerso.imageSrc} alt="" />
      </div>
      <div className="flex gap-3 relative bottom-4 left-3">
        <h1 className="text-lg font-bold ">{userPerso.autor}</h1>

        <img
          className="w-5 h-5 relative top-1 "
          src={userPerso.authorAvatarSrc}
          alt=""
        />
      </div>
      <div>
        <p className="relative bottom-4 left-3 text-gray-500 ">
          {userPerso.autorDetail}
        </p>
      </div>
      <div className="relative bottom-2 left-3">
        <p>{userPerso.description}</p>
      </div>
      <div className="relative bottom-2 left-3 text-blue-500">
        <button>{userPerso.languageTradiction} </button>
      </div>
      <div className="relative top-1 left-3">
        <p>{userPerso.dateOfInscription} </p>
      </div>
      <div className="flex gap-2 relative top-4 left-3">
        <div>{userPerso.numberOfSubscriptions}</div>
        <div>{userPerso.NumberOfSubscribers}</div>
      </div>
      <div className="relative top-4 text-gray-500 left-3">
        {userPerso.followedBy}{" "}
      </div>
    </div>
  );
}

export default Username;
