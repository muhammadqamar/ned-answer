import React from "react";
import { Col } from "react-bootstrap";
export default function JoinTeam({ heading, detail, img }) {
  return (
    <div className="Join">
      <div className="content">
        <Col xs={12} sm={6}>
          <h4>{heading}</h4>

          <p>{detail}</p>
          <a href="">
            <button>Message Us</button>
          </a>
        </Col>
      </div>
      <img src={img} />
    </div>
  );
}
