import React from "react";
import search from "../images/search.png";

function Trends1() {
  return (
    <div className="search1">
      <img className="w-4 h-4 m-1 relative left-8" src={search} alt="" />
      <input className="search2" type="search" placeholder="rechercher" />
    </div>
  );
}

export default Trends1;
