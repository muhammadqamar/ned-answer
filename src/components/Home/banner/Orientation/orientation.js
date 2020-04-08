import React from "react";
import applestore from "../assets/images/applestore.png";
import playstore from "../assets/images/playstore.png";

import mobile from "../assets/images/mobile.png";

export default function Orientation({ heading, subheading }) {
  return (
    <div className="intro-text">
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <img src={mobile} className="dsiplayforsmall" />
      <div className="buttons-all">
        <a href="">
          {" "}
          <button>Create Account</button>
        </a>
        <span>OR</span>
        <img src={applestore} />
        <img src={playstore} />
      </div>
    </div>
  );
}
