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
    <div>
      <img src={oneData.coverPhoto} alt="" />
      <img src={oneData.imageSrc} alt="" />
      <img src={oneData.authorAvatarSrc} alt="" />
      <h1>{oneData.autor}</h1>
      <p>{oneData.autorDetail} </p>
    </div>
  );
}

export default UserNameAll;
