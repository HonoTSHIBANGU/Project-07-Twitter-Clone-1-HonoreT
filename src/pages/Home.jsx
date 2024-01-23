import React from "react";
import Header from "../components/header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";

function Home() {
  return (
    <main className="font-sans font-inter border-b border-[1px] border-solid border-[#2F3336] flex-1 flex-shrink-0 basis-800  ml-20 mr-8">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;
