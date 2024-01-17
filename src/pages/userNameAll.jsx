import React from "react";
import { useParams } from "react-router-dom";
import users from "../model/user.js";
import tweet from "../model/tweet.js";

function UserNameAll() {
  const { username } = useParams("username");

  const oneData = users.find((use) => {
    return use.autor == username;
  });

  return (
    <div className="border-b border-[1px] border-solid border-[#2F3336] ml-20 mr-8 flex-1 flex-shrink-0 basis-800">
      <div className="relative top-10">
        <img src={oneData.coverPhoto} alt="" />
      </div>
      <div className="relative bottom-10 left-6 w-40 h-20">
        <img src={oneData.imageSrc} alt="" />
      </div>
      <div className="flex gap-3 relative top-14 left-3">
        <h1 className="text-lg font-bold">{oneData.autor}</h1>

        <img
          className="w-5 h-5 relative top-1 "
          src={oneData.authorAvatarSrc}
          alt=""
        />
      </div>
      <div>
        <p className="relative top-14 left-3 text-gray-500 ">
          {oneData.autorDetail}
        </p>
      </div>
      <div className="relative top-16 left-3">
        <p>{oneData.description}</p>
      </div>
      <div className="relative top-16 left-3 text-blue-500">
        <button>{oneData.languageTradiction} </button>
      </div>
      <div className="relative top-20 left-3">
        <p>{oneData.dateOfInscription} </p>
      </div>
      <div className="flex gap-2 relative top-24 left-3">
        <div>{oneData.numberOfSubscriptions}</div>
        <div>{oneData.NumberOfSubscribers}</div>
      </div>
      <div className="relative top-24 left-3">{oneData.followedBy} </div>
    </div>
  );
}

export default UserNameAll;
