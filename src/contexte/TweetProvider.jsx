import React, { createContext, useState } from "react";
import TweetList from "../pages/data/initial-data.json";

export const TweetContext = createContext();

function TweetProvider({ children }) {
  const [tweetAdd, setTweetAdd] = useState(TweetList.tweets);
  //console.log(tweetAdd);

  return (
    <TweetContext.Provider value={[tweetAdd, setTweetAdd]}>
      {children}
    </TweetContext.Provider>
  );
}

export default TweetProvider;
