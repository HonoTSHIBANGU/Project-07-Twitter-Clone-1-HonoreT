import React, { useState } from "react";
import "../style/App.css";
import Photo5 from "../images/Reply.png";
import Photo6 from "../images/Retweet.png";
import Photo7 from "../images/React.png";
import Photo8 from "../images/Buton.png";

const Tweets2 = () => {
  const [count1, setCount1] = useState(0);
  const [hover1, setHover1] = useState(false);
  const [count2, setCount2] = useState(0);
  const [hover2, setHover2] = useState(false);
  const [count3, setCount3] = useState(0);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

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
    if (count3 === 0) {
      setCount3(count3 + 1);
    } else {
      setCount3(count3 - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-20 text-base">
        <div className="tweet-act1">
          <button
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            style={{ color: hover1 ? "green" : "white" }}
            className="tweet-action1"
            onClick={incrementCount1}
          >
            <div>
              <img
                style={{ backgroundColor: hover1 ? "green" : "black" }}
                src={Photo5}
                alt=""
              />
            </div>
            <div>
              <p> {count1} </p>
            </div>
          </button>
        </div>
        <div className="tweet-act2">
          <button
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            style={{ color: hover2 ? "yellow" : "white" }}
            className="tweet-action2"
            onClick={incrementCount2}
          >
            <div>
              <img
                style={{ backgroundColor: hover2 ? "yellow" : "black" }}
                src={Photo6}
                alt=""
              />
            </div>
            <div>
              <p>{count2} </p>
            </div>
          </button>
        </div>
        <div className="tweet-act">
          <button
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            style={{ color: hover3 ? "red" : "white" }}
            className="tweet-action3"
            onClick={incrementCount3}
          >
            <div>
              <img
                style={{ backgroundColor: hover3 ? "red" : "black" }}
                src={Photo7}
                alt=""
              />
            </div>
            <div>
              <p>{count3}</p>
            </div>
          </button>
        </div>
        <div
          onMouseEnter={() => setHover4(true)}
          onMouseLeave={() => setHover4(false)}
        >
          <img
            style={{ backgroundColor: hover4 ? "blue" : "black" }}
            className="tweet-act4"
            src={Photo8}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Tweets2;
