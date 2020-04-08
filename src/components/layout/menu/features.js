import React, { useState } from "react";
import { Link } from "gatsby";

import crosstoggle from "../header/assets/images/crosstoggle.svg";
export default function Features({ heading, info, page, toggleclose }) {
  return (
    <div className="fetures">
      <Link to={page} onClick={toggleclose}>
        <h4>{heading} </h4>
      </Link>

      <p>{info}</p>
    </div>
  );
}
