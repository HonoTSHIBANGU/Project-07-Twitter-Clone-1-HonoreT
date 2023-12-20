import React from "react";
import Trends1 from "./Trend1";
import Trends2 from "./Trends2";
import Trends3 from "./Trends3";
import Trends4 from "./Trends4";

function Trends() {
  return (
    <div className="t-trend">
      <div className="t-trend1">
        <Trends1 />
      </div>
      <div className="t-trend2">
        <Trends2 />
      </div>
      <div className="t-trend3">
        <Trends3 />
      </div>
      <div className="t-trend4">
        <Trends4 />
      </div>
    </div>
  );
}

export default Trends;
