import React, { useState } from "react";
import "../style/App.css";
import Photo5 from "../images/Reply.png";
import Photo6 from "../images/Retweet.png";
import Photo7 from "../images/React.png";
import Photo8 from "../images/Buton.png";

function Tweets2() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  const toggleCount = () => {
    if (count === 0) {
      setCount(count + 1);
      setLike(true);
    } else {
      setCount(count - 1);
      setLike(false);
    }
  };

  return (
    <div>
      <div className="tweet-actions">
        <div className="tweet-action">
          <button onClick={toggleCount}>
            <img src={Photo5} alt="" />
          </button>
          <p>{count}</p>
        </div>
        <div className="tweet-action">
          <img src={Photo6} alt="" />
          <p>2</p>
        </div>
        <div className="tweet-action">
          <img src={Photo7} alt="" />
          <p>2</p>
        </div>
        <div className="tweet-action">
          <img src={Photo8} alt="" />
          <p>2</p>
        </div>
      </div>
    </div>
  );
}

export default Tweets2;
