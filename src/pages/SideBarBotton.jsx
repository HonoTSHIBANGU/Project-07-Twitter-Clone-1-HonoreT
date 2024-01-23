import React from "react";
import Photo from "../images/hh.jpg";
import Photo1 from "../images/ht.png";
import userPerso from "../model/userPerso.js";

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
  const sideBarBotton1 = sideBarBotton.map((item, i) => (
    <div className="flex flex-col gap-40 relative top-30" key={i}>
      <button className="flex w-225 h-38  pt-1 pb-1 justify-center items-center flex-shrink-0 rounded-full bg-blue-500 text-whitesmoke">
        {item.button1}
      </button>
      <div>
        <div className="conteneur hover:bg-gray-500 hover:rounded-full">
          <div className="flex gap-2">
            <img
              className="w-16 h-16 flex-shrink-0 rounded-full border border-solid border-black gray-300 bg-black   "
              src={userPerso.imageSrc}
              alt=""
            />

            <div className="flex flex-col gap-1 leading-1">
              <div className="flex justify-between gap-15 relative right-0">
                <div className="flex gap-3">
                  <div className="text-gray-300 font-sans font-semibold text-base">
                    {item.name}
                  </div>
                  <img
                    className="w-16.667 h-16.88 flex-shrink-0"
                    src={item.avatar}
                    alt="cadenas"
                  />
                </div>
                <div className="relative top-15 left-2">{item.button2} </div>
              </div>

              <div className="text-gray-600 font-sans font-semibold text-base">
                {item.htag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div>{sideBarBotton1}</div>;
}

export default SideBarBotton;
