import React from "react";
import "./assets/css/style.scss";
import Dual from "./Dual/dual.js";
import Single from "./Single/single.js";

export default function Gallerysection({
  heading,
  detail,
  name,
  storydetail,
  storybuttonLink,
  storybuttontext,
  background
}) {
  return (
    <div className="gallery">
      <Dual
        heading={heading}
        details={detail}
        loginText={"Create Account"}
        background={background}
      />
      <Single
        name={name}
        accountButtonlink={storybuttonLink}
        content={storydetail}
        accountButton={storybuttontext}
      />
    </div>
  );
}
