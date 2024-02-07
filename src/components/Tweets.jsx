import React, { useContext } from "react";
import { TweetContext } from "../contexte/TweetProvider.jsx";
import { Link } from "react-router-dom";
import Tweets2 from "../components/Tweets2.jsx";
import users from "../model/user.js";

function Tweets() {
  const [tweetAdd, setTweetAdd] = useContext(TweetContext);
  //console.log(tweetAdd);
  const Tweet = tweetAdd.map((item) => {
    const user = users.find((user) => user.id === item.userId);

    return (
      <div key={item.id}>
        <div className="flex justify-start items-start gap-1.5 p-6 p-4 border-b border-[1px] border-solid border-[#2F3336]">
          <div className="flex-shrink-0 flex-grow-0 w-16 h-16 ">
            <Link to={`/${user.autor}`}>
              {user.imageSrc && (
                <img className="rounded-full" src={user.imageSrc} alt="" />
              )}
            </Link>
          </div>

          <div className="flex flex-col items-start justify-start gap-30 w-full  ">
            <div className="flex  gap-2">
              {user.autor}
              {user.authorAvatarSrc && (
                <img src={user.authorAvatarSrc} alt="" />
              )}
              <p className="text-gray-500">{user.autorDetail}</p>
            </div>

            <div className="flex flex-col gap-4  p-4 ">
              <p className="relative right-4">{item.tweetText}</p>
              <div className="relative right-4">
                {user.Image && <img src={user.Image} alt="" />}
              </div>
            </div>
            <Tweets2 />
          </div>
        </div>
      </div>
    );
  });

  return <div>{Tweet}</div>;
}
export default Tweets;
