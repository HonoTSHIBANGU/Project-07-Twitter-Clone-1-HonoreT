import React, { useState } from "react";
import "../style/App.css";
import Photo5 from "../images/Reply.png";
import Photo6 from "../images/Retweet.png";
import Photo7 from "../images/React.png";
import Photo8 from "../images/Buton.png";

function Tweets2() {
  const [count, setCount] = useState(0);

  const toggleCount = () => {
    if (count === 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="tweet-actions">
        <div className="tweet-action1">
          <button>
            <img src={Photo5} alt="" />
          </button>
          <p>2</p>
        </div>
        <div className="tweet-action2">
          <img src={Photo6} alt="" />
          <p>2</p>
        </div>
        <div className="tweet-action3">
          <button onClick={toggleCount}>
            <img src={Photo7} alt="" />
          </button>
          <p>{count}</p>
        </div>
        <div className="tweet-action4">
          <img src={Photo8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tweets2;
