import React, { useState } from "react";
import "../style/App.css";
import Photo5 from "../images/Reply.png";
import Photo6 from "../images/Retweet.png";
import Photo7 from "../images/React.png";
import Photo8 from "../images/Buton.png";

const Tweets2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [liked, setLiked] = React.useState(false);

  const incrementCount1 = () => {
    if (count1 === 0) {
      setCount1(count1 + 1);
    } else {
      setCount1(count1 - 1);
    }
  };
  const incrementCount2 = () => {
    if (count2 === 0) {
      setCount2(count2 + 1);
    } else {
      setCount2(count2 - 1);
    }
  };

  const incrementCount3 = () => {
    if (liked) {
      setCount3(count3 + 1);
      setLiked(false);
    } else {
      setCount3(count3 - 1);
      setLiked(true);
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center gap-20 text-base">
        <div className="tweet-act1">
          <button className="tweet-action1" onClick={incrementCount1}>
            <div>
              <img src={Photo5} alt="" />
            </div>
            <div>
              <p> {count1} </p>
            </div>
          </button>
        </div>
        <div className="tweet-act2">
          <button className="tweet-action2" onClick={incrementCount2}>
            <div>
              <img src={Photo6} alt="" />
            </div>
            <div>
              <p>{count2} </p>
            </div>
          </button>
        </div>
        <div className="tweet-act">
          <button
            className="tweet-action3"
            onClick={incrementCount3}
            style={{ color: liked ? "red" : "blue" }}
          >
            <div>
              <img src={Photo7} alt="" />
            </div>
            <div>
              <p> {count3} </p>
            </div>
          </button>
        </div>
        <div>
          <img className="tweet-act4" src={Photo8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tweets2;
