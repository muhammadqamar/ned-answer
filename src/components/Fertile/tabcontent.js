import React from "react";
import { Link } from "gatsby";
export default function Tabcontent({ media, cat, info }) {
  return (
    <Link to="./fertile/details">
      <div className="f_contnet">
        <img src={media} />
        <h5>{cat}</h5>
        <p>{info}</p>
      </div>
    </Link>
  );
}
