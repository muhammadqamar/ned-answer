import React from "react";
import { Col } from "react-bootstrap";

export default function ReviewsDetail({ story_detail_01, story_title_01 }) {
  return (
    <Col md={6} className="overflow-adjust pt-5 check">
      <h2>{story_title_01}</h2>
      <p>{story_detail_01}</p>
    </Col>
  );
}
