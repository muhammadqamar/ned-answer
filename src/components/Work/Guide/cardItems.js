import React from "react";
import { Col } from "react-bootstrap";
import profileAvatar from "./assets/images/profile-avatar.jpg";

export default function CardItems() {
  return (
    <Col md={6}>
      <div className="card-items">
        <ul>
          <li>
            <div className="card-avatar">
              <img src={profileAvatar} />
            </div>
            <div className="card-info">
              <h4>Dr. Layne Evans</h4>
              <span>Geneticist</span>
              <div className="connect-btn">
                <label>Connect</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    transform="translate(0 -1)"
                  >
                    <circle
                      cx="10.5"
                      cy="11.5"
                      r="10.5"
                      fill="#2355F0"
                    ></circle>
                    <text
                      fill="#FFF"
                      font-family="GalanoGrotesque-SemiBold, Galano Grotesque"
                      font-size="16"
                      font-weight="500"
                    >
                      <tspan x="6" y="16">
                        +
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div className="card-avatar">
              <img src={profileAvatar} />
            </div>
            <div className="card-info">
              <h4>Dr. Layne Evans</h4>
              <span>Geneticist</span>
              <div className="connect-btn">
                <label>Connect</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    transform="translate(0 -1)"
                  >
                    <circle
                      cx="10.5"
                      cy="11.5"
                      r="10.5"
                      fill="#2355F0"
                    ></circle>
                    <text
                      fill="#FFF"
                      font-family="GalanoGrotesque-SemiBold, Galano Grotesque"
                      font-size="16"
                      font-weight="500"
                    >
                      <tspan x="6" y="16">
                        +
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div className="card-avatar">
              <img src={profileAvatar} />
            </div>
            <div className="card-info">
              <h4>Dr. Layne Evans</h4>
              <span>Geneticist</span>
              <div className="connect-btn">
                <label>Connect</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    transform="translate(0 -1)"
                  >
                    <circle
                      cx="10.5"
                      cy="11.5"
                      r="10.5"
                      fill="#2355F0"
                    ></circle>
                    <text
                      fill="#FFF"
                      font-family="GalanoGrotesque-SemiBold, Galano Grotesque"
                      font-size="16"
                      font-weight="500"
                    >
                      <tspan x="6" y="16">
                        +
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Col>
  );
}
