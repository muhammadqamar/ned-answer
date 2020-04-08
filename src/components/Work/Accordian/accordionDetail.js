import React, { useState } from "react";
import { Row, Col, Accordion, Card, Button } from "react-bootstrap";
import "./assets/css/style.scss";

export default function AccordionDetail({ content }) {
  const [toogleAccord, setToggleAccord] = useState(-1);

  const changeactive = (e) => {
    if (toogleAccord === e) {
      setToggleAccord(-1);
    } else {
      setToggleAccord(e);
    }
  };
  return (
    <div className="accordion-section">
      <div className="content">
        <Row>
          <Col col={12}>
            <h2>Still Have a few questions? </h2>
            <span>Here are some of the more common ones</span>
            <Accordion defaultActiveKey="0">
              {content.map((data, counter) => {
                return (
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={counter}
                        className={toogleAccord === counter ? "opened" : null}
                        onClick={changeactive.bind(this, counter)}
                      >
                        {data.question}
                        <svg
                          width="18"
                          height="8"
                          viewBox="0 0 18 8"
                          className="closeWindow"
                        >
                          <path
                            fill="#2254F0"
                            d="M0 .994c0 .32.12.6.4.8L8.402 7.79c.36.28.84.28 1.2 0l8.003-5.996c.44-.32.52-.96.2-1.4-.32-.44-.96-.52-1.4-.2L9.003 5.752 1.6.195c-.44-.32-1.08-.24-1.4.2-.12.16-.2.4-.2.6z"
                          />
                        </svg>
                        <svg
                          width="18px"
                          height="8px"
                          viewBox="0 0 18 8"
                          className="openWindow"
                        >
                          <g
                            id="Round-5-w/-Mobile"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="How-it-works-"
                              transform="translate(-1112.000000, -3758.000000)"
                              fill="#2254F0"
                              fillRule="nonzero"
                            >
                              <path
                                d="M1130,3765.00594 C1130,3764.68612 1129.87996,3764.40628 1129.59988,3764.2064 L1121.5975,3758.20988 C1121.23739,3757.93004 1120.75725,3757.93004 1120.39714,3758.20988 L1112.39476,3764.2064 C1111.95463,3764.52621 1111.8746,3765.16584 1112.1947,3765.60559 C1112.51479,3766.04533 1113.15498,3766.12529 1113.59512,3765.80547 L1120.99732,3760.2487 L1128.39952,3765.80547 C1128.83965,3766.12529 1129.47985,3766.04533 1129.79994,3765.60559 C1129.91998,3765.44568 1130,3765.20582 1130,3765.00594 Z"
                                id="Path"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={counter}>
                      <Card.Body>{data.answer}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </div>
    </div>
  );
}
