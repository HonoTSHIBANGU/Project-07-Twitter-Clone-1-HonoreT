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
        <div className="tweet-act1">
          <button className="tweet-action1" onClick={toggleCount}>
            <div>
              <img src={Photo5} alt="" />
            </div>
            <div>
              <p>{count} </p>
            </div>
          </button>
        </div>
        <div className="tweet-act2">
          <button className="tweet-action2" onClick={toggleCount}>
            <div>
              <img src={Photo6} alt="" />
            </div>
            <div>
              <p>{count}</p>
            </div>
          </button>
        </div>
        <div className="tweet-act">
          <button className="tweet-action3" onClick={toggleCount}>
            <div>
              <img src={Photo7} alt="" />
            </div>
            <div>
              <p>{count}</p>
            </div>
          </button>
        </div>
        <div>
          <img className="tweet-act4" src={Photo8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tweets2;
