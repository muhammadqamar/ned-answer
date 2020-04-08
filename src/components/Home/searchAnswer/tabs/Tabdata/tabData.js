import React from "react";
import apple from "../../assets/images/apple.png";
import playstore from "../../assets/images/playstore.png";

export default function Tabdata({ title, data }) {
  return (
    <div className="tabdata">
      <h1>{title}</h1>
      <p>{data}</p>

      <div className="img-section">
        <img src={apple} />
        <img src={playstore} />
      </div>
    </div>
  );
}
