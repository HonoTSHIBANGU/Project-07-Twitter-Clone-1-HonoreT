import React from "react";
import Photo from "../images/hh.jpg";
import Photo1 from "../images/ht.png";

const sideBarBotton = [
  {
    name: "TSHIBANGU Honoré",
    ProfilePhoto: Photo,
    avatar: Photo1,
    htag: "@honore",
    button1: "Tweet",
    button2: "...",
  },
];

function SideBarBotton() {
  const sideBarBotton1 = sideBarBotton.map((item) => (
    <div className="footer">
      <button className="bouton-tweet">{item.button1} </button>
      <div>
        <div className="conteneur">
          <div className="imageText">
            <img className="profile-body" src={item.ProfilePhoto} alt="" />

            <div className="textDiv">
              <div className="div2">
                <div className="division">
                  <div className="text">{item.name}</div>
                  <img className="key" src={item.avatar} alt="cadenas" />
                </div>
                <div className="div3">{item.button2} </div>
              </div>

              <div className="textContent">{item.htag}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div>{sideBarBotton1}</div>;
}

export default SideBarBotton;
