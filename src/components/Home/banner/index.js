import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";
import { Row, Col } from "react-bootstrap";
import Orientation from "./Orientation/orientation.js";
import SupportImg from "./supportImg/supportImg.js";

export default function Banner({ subheading, heading }) {
  return (
    <div className="banner">
      <div className="content">
        <Row>
          <Col md={12} xl={5}>
            <Orientation heading={heading} subheading={subheading} />
          </Col>
          <Col md={12} xl={7}>
            <SupportImg />
          </Col>
        </Row>
      </div>
    </div>
  );
}
