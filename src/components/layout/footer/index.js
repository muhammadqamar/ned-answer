import React from "react";
import "./assets/css/style.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
//all coomponent imports
import Social from "./allLogos/allLogo.js";
import MenuItem from "./menuItems/menuitems.js";
import MediaApp from "./mediaApp/mediaApp.js";

export default function Footer() {
  return (
    <div className="mainfooter">
      <Row className="content">
        <Col xs={12} sm={9}>
          <Row>
            <Col xs={12} sm={4}>
              <Social />
            </Col>
            <MenuItem />
          </Row>
        </Col>
        <Col xs={12} sm={3}>
          <div className="mobile-social-footer">
            <h5>Follow</h5>
            <Social />
          </div>
          <MediaApp />
        </Col>
        <Col>
          <div className="footnote">
            <p className="copyrights">
              Copyright MedAnswers, Inc and FertilityAnswers &copy; 2020 | All
              Rights Reserved
            </p>
            <div className="footerlinks">
              <Link to="">Patient Terms</Link>
              <Link to="">Expert Terms</Link>
              <Link to=""> Privacy Policy</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
