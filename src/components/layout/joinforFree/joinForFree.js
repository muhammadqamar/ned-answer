import React, { useState, useEffect } from "react";
import "./assets/css/style.scss";

import { useSelector } from "react-redux";

export default function JoinForFree({ heading, buttonText }) {
  return (
    <>
      <div className="joinForFree">
        <div className="content">
          <h1>{heading}</h1>
          <a href="">
            <button>{buttonText}</button>
          </a>
        </div>
      </div>
    </>
  );
}
