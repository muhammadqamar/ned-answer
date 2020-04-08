import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Info({ title, detail, color, counter }) {
  return (
    <Col md={6} className="info-detail">
      <Row>
        <Col lg={2} md={3}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <g fill="none" fill-rule="evenodd">
              <path
                fill={color}
                d="M30 0c16.569 0 30 13.431 30 30v30H30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0z"
              />
              <text
                fill="#FFF"
                font-family="GalanoGrotesque-SemiBold, Galano Grotesque"
                font-size="24"
                font-weight="500"
              >
                <tspan x="41.06" y="48">
                  {counter}
                </tspan>
              </text>
            </g>
          </svg>
        </Col>
        <Col lg={10} md={9} className="pt-4">
          <h3>{title} </h3>
          <p>{detail}</p>
        </Col>
      </Row>
    </Col>
  );
}
