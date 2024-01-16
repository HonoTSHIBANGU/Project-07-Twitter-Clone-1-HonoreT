import React from "react";
import { useParams } from "react-router-dom";
import users from "../model/user.js";

function UserNameAll() {
  const { username } = useParams("username");

  const oneData = users.find((use) => {
    return use.autor == username;
  });

  return (
    <div>
      <h1>{oneData.autor}</h1>
      <img src={oneData.imageSrc} alt="" />
    </div>
  );
}

export default UserNameAll;
