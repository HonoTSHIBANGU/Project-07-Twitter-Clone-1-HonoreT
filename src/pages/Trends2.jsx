import React from "react";
import Profil1 from "../images/Profile-Photo2.png";
import Profil2 from "../images/Group.png";

function Trends2() {
  return (
    <div className="follow2">
      <div>
        <h3>Who to follow</h3>
      </div>
      <div className="follow1">
        <div>
          <img src={Profil1} alt="" />
        </div>
        <div>
          <div className="times">
            <p>The New York Times</p>
            <img src={Profil2} alt="" />
          </div>
          <p>@anytimes</p>
        </div>
        <button>Follow</button>
      </div>
      <div>
        <div className="follow1">
          <div>
            <img src={Profil1} alt="" />
          </div>
          <div>
            <div className="times">
              <p>The New York Times</p>
              <img src={Profil2} alt="" />
            </div>
            <p>@anytimes</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <div>
        <div className="follow1">
          <div>
            <img src={Profil1} alt="" />
          </div>
          <div>
            <div className="times">
              <p>The New York Times</p>
              <img src={Profil2} alt="" />
            </div>
            <p>@anytimes</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Trends2;
