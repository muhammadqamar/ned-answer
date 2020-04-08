import React from "react";
import { Row, Col } from "react-bootstrap";
import applestore from "../assets/images/applestore.png";
import playstore from "../assets/images/playstore.png";
import { Link } from "gatsby";
export default function Links({ heading, info, close }) {
  return (
    <div className="Links">
      <Row>
        <Col xs={6}>
          <h5>Legel</h5>
          <ul>
            <li>
              <Link to="/" onClick={close}>
                {" "}
                Patient Terms
              </Link>
            </li>
            <li>
              <Link to="/" onClick={close}>
                Expert Terms
              </Link>
            </li>

            <li>
              <Link to="/" onClick={close}>
                Privacy Policy{" "}
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={6}>
          <h5>Social</h5>
          <ul>
            <li>
              <Link to="/" onClick={close}>
                Instagram
              </Link>
            </li>
            <li>
              <Link to="/" onClick={close}>
                Facebook
              </Link>
            </li>
            <li>
              <Link to="/" onClick={close}>
                Twitter
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={12}>
          <div className="socialbox">
            <img src={applestore} />
            <img src={playstore} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
