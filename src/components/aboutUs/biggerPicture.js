import React from "react";
import Biggerpicture from "./assets/images/small-med-answers-logo-lockup-corner-full-color.jpg";

export default function BiggerPicture({
  disease_01,
  disease_02,
  disease_03,
  disease_04,
  information,
}) {
  return (
    <div className="BiggerPicture">
      <div className="content">
        <h3>The Bigger Picture</h3>
        <div classNam="figure">
          <div className="roundlogo">
            <img src={Biggerpicture} />
          </div>
          <div className="desktopview">
            <img
              src={`${require("./assets/images/obesity.svg")}`}
              className="obesity"
            />
            <img
              src={`${require("./assets/images/diabetes.svg")}`}
              className="diabetes"
            />
            <img
              src={`${require("./assets/images/covid-19.svg")}`}
              className="covid-19"
            />
            <img
              src={`${require("./assets/images/migraines.svg")}`}
              className="migraines"
            />

            <div className="diseaes">
              <span>{disease_01}</span>
              <span>{disease_02}</span>
              <span>{disease_03}</span>
              <span>{disease_04}</span>
            </div>
          </div>
          <div className="mobileview">
            <div className="left">
              <span>
                {disease_01}
                <div className="borderlnie green" />
              </span>
              <span>
                {disease_02}
                <div className="borderlnie skyblue" />
              </span>
            </div>
            <div className="right">
              <span>
                <div className="borderlnie blue" />
                {disease_03}
              </span>
              <span>
                <div className="borderlnie red" />
                {disease_04}
              </span>
            </div>
          </div>
        </div>

        <p>{information}</p>
        <a>
          <button>Learn more</button>
        </a>
      </div>
    </div>
  );
}
