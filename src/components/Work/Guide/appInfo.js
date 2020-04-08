import React from "react";
import { Col } from "react-bootstrap";
import mobileApp from "./assets/images/mobile-app.jpg";

export default function AppInfo() {
  return (
    <Col md={6}>
      <div className="moblile-app">
        <img src={mobileApp} />
        <ul>
          <li className="report">
            <label>Fertility Report</label>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">
                    <circle cx="10.5" cy="11.5" r="10.5" fill="#FF4F2F"/>
                    <text fill="#FFF" font-family="GalanoGrotesque-SemiBold, Galano Grotesque" font-size="16" font-weight="500">
                        <tspan x="6" y="16">+</tspan>
                    </text>
                </g>
            </svg>
          </li>
          <li className="age">
            <label>AGE / Height</label>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">
                    <circle cx="10.5" cy="11.5" r="10.5" fill="#00DF74"/>
                    <text fill="#FFF" font-family="GalanoGrotesque-SemiBold, Galano Grotesque" font-size="16" font-weight="500">
                        <tspan x="6" y="16">+</tspan>
                    </text>
                </g>
            </svg>
          </li>
          <li className="result">
            <label>Lab Results</label>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                  <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">
                      <circle cx="10.5" cy="11.5" r="10.5" fill="#2355F0"/>
                      <text fill="#FFF" font-family="GalanoGrotesque-SemiBold, Galano Grotesque" font-size="16" font-weight="500">
                          <tspan x="6" y="16">+</tspan>
                      </text>
                  </g>
              </svg>
          </li>
        </ul>
      </div>
    </Col>

     
  );
}
