import React, { createContext, useState } from "react";
import TweetList from "../model/Tweet";

export const TweetContext = createContext();

function TweetProvider({ children }) {
  const [tweetAdd, setTweetAdd] = useState(TweetList);
  console.log(TweetList);
  return (
    <TweetContext.Provider value={{ tweetAdd, setTweetAdd }}>
      {children}
    </TweetContext.Provider>
  );
}

export default TweetProvider;
