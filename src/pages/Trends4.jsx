import React from "react";

const footerLists = [
  {
    footerTitle: "Terms of Service Privacy Policy Cookie Policy",
    copyright: "Imprint Ads info... More... @2021 Twiter, Inc",
  },
];

function Trends4(item) {
  const footerList = footerLists.map((item, i) => (
    <div className="other" key={i}>
      <p>{item.footerTitle} </p>
      <p>{item.copyright} </p>
    </div>
  ));

  return <div>{footerList} </div>;
}

export default Trends4;
