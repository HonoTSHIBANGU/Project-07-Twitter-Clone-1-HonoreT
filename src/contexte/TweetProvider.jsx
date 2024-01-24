import React, { createContext, useState } from "react";
import TweetList from "../model/Tweet";

export const TweetContext = createContext([
  {
    id: "",
    userId: "",
    tweetText: "",
  },
]);

function TweetProvider({ children }) {
  const [tweetAdd, setTweetAdd] = useState(TweetList);
  //console.log(tweetAdd);

  return (
    <TweetContext.Provider value={[tweetAdd, setTweetAdd]}>
      {children}
    </TweetContext.Provider>
  );
}

export default TweetProvider;
