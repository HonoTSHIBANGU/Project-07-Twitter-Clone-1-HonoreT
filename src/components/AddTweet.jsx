import React, { useContext, useState } from "react";
import { TweetContext } from "../contexte/TweetProvider.jsx";

function AddTweet() {
  const [tweetAdd, setTweetAdd] = useContext(TweetContext);
  // console.log(tweetAdd);
  const [inputTweet, setInputTweet] = useState("");

  const addTweet = (inputT) => {
    if (inputT !== "") {
      const tweetPending = {
        id: 3,
        userId: 3,
        tweetText: inputT,
      };

      setTweetAdd((e) => [tweetPending, ...tweetAdd]);
    }
  };
  const tweetInput = (e) => {
    setInputTweet(e.target.value);
  };
  return <div>{addTweet}</div>;
}

export default AddTweet;
