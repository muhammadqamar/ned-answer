import React from "react";
import { Col } from "react-bootstrap";

export default function ReviewsBanner({ img }) {
  return (
    <Col xs={6} className="review-img overflow-adjust">
      <img src={img} />
    </Col>
  );
}
