import React from "react";
import footerlogo from "../assets/images/footerlogo.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
export default function MenuItems() {
  return (
    <div className="logosection">
      <div className="mainlogo">
        <img src={footerlogo} />
      </div>
      <div className="sociallinks">
        <img src={instagram} />
        <img src={facebook} />
        <img src={twitter} />
      </div>
    </div>
  );
}
