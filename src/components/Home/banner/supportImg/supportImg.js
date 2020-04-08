import React from "react";
import desktop from "../assets/images/desktop.png";
import mobile from "../assets/images/mobile.png";

export default function SupportImg() {
  return (
    <div className="supporBannerImg">
      <img src={desktop} className="desktop" />
      <img src={mobile} className="mobile" />
    </div>
  );
}
