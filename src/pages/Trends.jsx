import React from "react";
import Trends1 from "./Trend1";
import Trends2 from "./Trends2";
import Trends3 from "./Trends3";
import Trends4 from "./Trends4";
import Setting from "../images/Settings.png";

function Trends() {
  return (
    <div className="flex flex-col gap-3 relative  mr-10">
      <div className="t-trend1 ">
        <Trends1 />
      </div>
      <div className="t-trend2 p-4">
        <div className="flex justify-between ">
          <h2 className="m-1 font-bold">Trends for you</h2>
          <img className="w-5 h-5 font-bold" src={Setting} alt="" />
        </div>
        <Trends2 />
        <button className="text-blue-500 m-2 font-bold">Show more</button>
      </div>
      <div className="t-trend3 p-4">
        <h2 className="mb-8 font-bold">Who to follow</h2>
        <Trends3 />
        <button className="text-blue-500  font-bold">Show more</button>
      </div>
      <div className="t-trend4">
        <Trends4 />
      </div>
    </div>
  );
}

export default Trends;
