import React from "react";
import Profil1 from "../images/Profile-Photo2.png";
import Profil2 from "../images/Group.png";
import Profil3 from "../images/tweet-profile-photo.png";
import Profil4 from "../images/Profile-Photo3.png";
function Trends2() {
  return (
    <div className="follow2">
      <div>
        <h3>Who to follow</h3>
      </div>
      <div className="follow1">
        <div className="profil2">
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
          <div className="profil2">
            <img src={Profil3} alt="" />
          </div>
          <div>
            <div className="times">
              <p>
                <span>CNN</span>
              </p>
              <img src={Profil2} alt="" />
            </div>
            <p>@CNN</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <div>
        <div className="follow1">
          <div className="profil2">
            <img src={Profil4} alt="" />
          </div>
          <div>
            <div className="times">
              <p>Twitter</p>
              <img src={Profil2} alt="" />
            </div>
            <p>@Twitter</p>
          </div>
          <button>Follow</button>
        </div>
        <button className="show">
          <span>show more</span>
        </button>
      </div>
    </div>
  );
}

export default Trends2;
