import React from "react";
import answered from "./assets/images/message.svg";
import like from "./assets/images/like.svg";
import plus from "./assets/images/plus.svg";
import brief from "./assets/images/briefcase.svg";
import user from "./assets/images/add.png";
import { Link } from "gatsby";
import { Row, Col } from "react-bootstrap";

export default function Results({ content }) {
  return (
    <div className="Results">
      {content.map((x, y) => {
        return (
          <>
            {y === 3 && (
              <div className="addbox">
                <h4>Need a Question Answered within an hour?</h4>
                <button>
                  <a href="">Ask now</a>
                </button>
              </div>
            )}
            {y === 5 && (
              <div className="addbox2">
                <div>
                  <h4>Want to join our Fertility Network</h4>
                  <h5>
                    If you’re board certified, we’d love to hear from you.{" "}
                  </h5>
                  <button>
                    <a href="">Connect</a>
                  </button>
                </div>
                <img src={user} />
              </div>
            )}
            <div className="box">
              <Row>
                <Col xs={12} sm={10}>
                  <div className="main-box">
                    <div className="sectionleft">
                      <img src={x.media} />
                      <div className="info">
                        <Link to="./experts/profile">
                          <h3>{x.name}</h3>
                        </Link>
                        <h4>{x.location}</h4>
                        <h5>
                          <img src={plus} />
                          {x.data1}
                        </h5>
                        <h5>
                          <img src={brief} />
                          {x.data2}
                        </h5>
                      </div>
                    </div>
                    <div className="social">
                      <button className="follow">
                        <a href="">Follow</a>
                      </button>
                      <button className="connect">
                        <a href="">Connect</a>
                      </button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={2}>
                  <div className="count">
                    <h6>
                      {x.answerCount}

                      <img src={answered} />
                    </h6>
                    <h6>
                      {x.thanksCount}
                      <img src={like} />
                    </h6>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        );
      })}
    </div>
  );
}
