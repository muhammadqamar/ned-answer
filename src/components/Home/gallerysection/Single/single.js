import React from "react";

import arrow from "../assets/images/arrow.svg";
export default function Single({
  name,
  accountButton,
  content,
  accountButtonlink
}) {
  return (
    <div className="Single-img">
      <div className="abs-path">
        <h3>{name}</h3>
        <h5>{content}</h5>
        <a href={accountButtonlink}>
          {accountButton}
          <img src={arrow} style={{ width: "13px", marginLeft: "10px" }} />
        </a>
      </div>
    </div>
  );
}
