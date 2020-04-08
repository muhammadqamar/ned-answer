import React from "react";
import "./assets/css/style.scss";
import { Row, Col } from "react-bootstrap";
export default function Heading({ heading, subheading }) {
  return (
    <div className="work">
      <div className="work-heading">
        <div className="content">
          <Row className="m-0">
            <Col xs={12}>
              <h2>{heading}</h2>
              <p>{subheading}</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
