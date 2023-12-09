import React from "react";
import Trends2 from "../pages/Trends2.jsx";
import Setting from "../images/Settings.png";

function Trends() {
  return (
    <>
      <div>
        <div className="trend3">
          <div className="trend">
            <h3>trends for you</h3>
            <img src={Setting} alt="" />
          </div>
          <div className="trend4">
            <div className="trend2">
              <p>Treding in Turkey</p>
              <p>...</p>
            </div>
            <p>
              <span>#SQUID</span>
            </p>
            <p>2,066 Tweets</p>
          </div>
          <div className="trend4">
            <div className="trend2">
              <p>Treding in Turkey</p>
              <p>...</p>
            </div>
            <p>
              <span>#SQUID</span>
            </p>
            <p>2,066 Tweets</p>
          </div>
          <div className="trend4">
            <div className="trend2">
              <p>Treding in Turkey</p>
              <p>...</p>
            </div>
            <p>
              <span>#SQUID</span>
            </p>
            <p>2,066 Tweets</p>
          </div>
          <div>
            <button className="show">
              <span>show more</span>
            </button>
          </div>
        </div>
        <Trends2 />
      </div>
    </>
  );
}

export default Trends;
