import React from "react";
import { Row, Col } from "react-bootstrap";
export default function MenuItems() {
  return (
    <>
      <Col xs={5} sm={3}>
        <ul>
          <li>
            {" "}
            <a href=""> Answers</a>
          </li>
          <li>
            <a href=""> How it works</a>{" "}
          </li>
          <li>
            <a href=""> Fertile</a>{" "}
          </li>
          <li>
            <a href=""> Edge</a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> About</a>{" "}
          </li>
          <li>
            <a href=""> MedAnswers</a>{" "}
          </li>
        </ul>
      </Col>
      <Col xs={7} sm={4}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <ul className="bold-items">
            <li>
              {" "}
              <a href=""> FAQs</a>
            </li>
            <li>
              <a href=""> Contact Us</a>{" "}
            </li>
            <li>
              <a href=""> Privacy</a>{" "}
            </li>
          </ul>

          <p>Want to join our team of Experts?</p>
        </div>
      </Col>
    </>
  );
}
