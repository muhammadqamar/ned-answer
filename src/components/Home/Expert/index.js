import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./assets/css/style.scss";
import ExpertInfo from "./expertInfo/expertInfo.js";
import { useSelector } from "react-redux";
import more from "./assets/images/more.svg";

export default function Expert({ content, heading }) {
  return (
    <div className="Expert">
      <div className="content">
        <Row>
          <Col xs={12}>
            <h1>{heading}</h1>
          </Col>

          {content.map(data => {
            return (
              <Col xs={12} sm={4}>
                <ExpertInfo
                  title={data.title}
                  img={data.img}
                  info={data.detial}
                />
              </Col>
            );
          })}

          <Col xs={12}>
            <a>
              <p>
                See our Experts
                <img src={more} style={{ padding: "0px 0px 0px 5px" }} />
              </p>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
