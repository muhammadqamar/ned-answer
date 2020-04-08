import React from "react";
import single from "../assets/images/plain.png";

export default function Dual({ heading, details, loginText, background }) {
  return (
    <div className="dual-img">
      <img src={background} className="plain-img" />
      <div className="path-text">
        <h3>{heading}</h3>
        <h5>{details}</h5>

        <a href="">
          <button>{loginText}</button>
        </a>
      </div>
    </div>
  );
}
