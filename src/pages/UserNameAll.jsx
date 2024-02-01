import React from "react";
import { useParams, Link } from "react-router-dom";
import users from "../model/user.js";
// import tweet from "../model/Tweet.js";
import backIcone from "../images/backicone2.jpeg";

function UserNameAll() {
  const { username } = useParams("username");

  const oneData = users.find((use) => {
    return use.autor == username;
  });

  return (
    <div className="border-b border-[1px] border-solid border-[#2F3336] ml-20 mr-8 flex-1 flex-shrink-0 basis-800">
      <Link to="/">
        <div className="flex">
          <img
            className="w-8 h-4  m-5  relative bottom-1"
            src={backIcone}
            alt=""
          />
          <div className="flex gap-2 relative top-2">
            <h1 className="text-lg font-bold">{oneData.autor}</h1>

            <img
              className="w-5 h-5 relative top-1 "
              src={oneData.authorAvatarSrc}
              alt=""
            />
          </div>
        </div>
      </Link>
      <div className="relative bottom-6">
        <img src={oneData.coverPhoto} alt="" />
      </div>
      <div className="relative bottom-28 left-6 w-40 h-20">
        <img src={oneData.imageSrc} alt="" />
      </div>
      <div className=" flex gap-20  relative bottom-20 ml-80 ">
        <div>
          <button className="relative left-60 ">{oneData.button2}</button>
        </div>
        <div className=" ">
          <button className="w-20   relative left-60  rounded-full ">
            {oneData.button1}
          </button>
        </div>
      </div>
      <div className="flex gap-3 relative bottom-4 left-3">
        <h1 className="text-lg font-bold">{oneData.autor}</h1>

        <img
          className="w-5 h-5 relative top-1 "
          src={oneData.authorAvatarSrc}
          alt=""
        />
      </div>

      <div>
        <p className="relative bottom-4 left-3 text-gray-500 ">
          {oneData.autorDetail}
        </p>
      </div>
      <div className="relative bottom-2 left-3">
        <p>{oneData.description}</p>
      </div>
      <div className="relative bottom-2 left-3 text-blue-500">
        <button>{oneData.languageTradiction} </button>
      </div>
      <div className="relative top-1 left-3 text-gray-500">
        <p>{oneData.dateOfInscription} </p>
      </div>
      <div className="flex gap-2 relative top-4 left-3">
        <div>{oneData.numberOfSubscriptions}</div>
        <div>{oneData.NumberOfSubscribers}</div>
      </div>
      <div className="relative top-4 left-3 text-gray-500">
        {oneData.followedBy}
      </div>
      <div>
        <p className="flex gap-2 relative top-14 left-3 ">
          {oneData.tweetText}
        </p>
      </div>
    </div>
  );
}

export default UserNameAll;
