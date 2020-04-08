import React from "react";
import { Row, Col } from "react-bootstrap";
import "./assets/css/style.scss";
import more from "./assets/images/more.svg";
import ExpertInfo from "./expertInfo/expertInfo.js";

export default function Expert({ content, title }) {
  return (
    <div className="Expertwork">
      <div className="content">
        <Row>
          <Col xs={12}>
            <h1>{title}</h1>
          </Col>

          {content.map((data) => {
            return (
              <Col xs={12} sm={4}>
                <ExpertInfo
                  title={data.title}
                  img={data.img}
                  info={data.detail}
                />
              </Col>
            );
          })}

          <Col xs={12}>
            <a>
              <p>
                See Our Experts{" "}
                <img src={more} style={{ padding: "0px 0px 0px 5px" }} />
              </p>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
