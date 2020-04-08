import React from "react";
import { Row, Col, Tabs } from "react-bootstrap";
import "./assets/css/style.scss";
import AllTabs from "./tabs/allTabs.js";
import mobile from "./assets/images/mobile.png";

export default function SearchAnswer({ content }) {
  return (
    <div className="answerSolution ">
      <div className="content">
        <Row>
          <Col xs={12} sm={9}>
            <h5>
              <a href="">The MOBILE APP</a>
            </h5>

            <AllTabs content={content} />
          </Col>

          <Col xs={12} sm={3}>
            <img className="mobile" src={mobile} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
