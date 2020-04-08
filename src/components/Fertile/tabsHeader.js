import React, { useState } from "react";
import { Tab, Tabs, Col, Row } from "react-bootstrap";
import Tabcontent from "./tabcontent.js";

function Tabsheaders({ tabs }) {
  const [key, setKey] = useState("Featured");
  return (
    <div className="tabsheader">
      <div className="content">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
        >
          <Tab eventKey="Featured" title="Featured">
            <h3>Featured Works</h3>
            <Row>
              {tabs.map(x => {
                return (
                  <Col xs={12} sm={4}>
                    <Tabcontent
                      media={x.media}
                      cat={x.category}
                      info={x.description}
                    />
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="Stories" title="Stories">
            <h3>Stories</h3>
            <Row>
              {tabs.map(x => {
                return (
                  <Col xs={12} sm={4}>
                    <Tabcontent
                      media={x.media}
                      cat={x.category}
                      info={x.description}
                    />
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="News" title="News">
            <h3>News</h3>
            <Row>
              {tabs.map(x => {
                return (
                  <Col xs={12} sm={4}>
                    <Tabcontent
                      media={x.media}
                      cat={x.category}
                      info={x.description}
                    />
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="Lifestyle" title="Lifestyle">
            <h3>Lifestyle</h3>
            <Row>
              {tabs.map(x => {
                return (
                  <Col xs={12} sm={4}>
                    <Tabcontent
                      media={x.media}
                      cat={x.category}
                      info={x.description}
                    />
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="Expert" title="Expert">
            <h3>Expert</h3>
            <Row>
              {tabs.map(x => {
                return (
                  <Col xs={12} sm={4}>
                    <Tabcontent
                      media={x.media}
                      cat={x.category}
                      info={x.description}
                    />
                  </Col>
                );
              })}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default Tabsheaders;
