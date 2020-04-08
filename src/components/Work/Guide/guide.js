import React from "react";
import "./assets/css/style.scss";
import { Row, Col } from "react-bootstrap";

import Info from "./info.js";
import AppInfo from "./appInfo.js";
import Conversation from "./conversation.js";
import CardItems from "./cardItems.js";
export default function Guide({
  step_detail_01,
  step_detail_02,
  step_detail_03,
  step_title_02,
  step_title_01,
  step_title_3,
}) {
  return (
    <div className="guidance">
      <div className="content">
        <Row className="m-0 pb-lg-5 pb-md-4">
          <Info
            title={step_title_01}
            detail={step_detail_01}
            color={"#00dd78"}
            counter={1}
          />
          <AppInfo />
        </Row>
        <Row className="m-0 pb-lg-5 pb-md-4 mb-lg-5 mb-md-4 flex-xl-row flex-lg-row flex-md-row flex-column-reverse">
          <Conversation />

          <Info
            title={step_title_02}
            detail={step_detail_02}
            color={"#1dcce9"}
            counter={2}
          />
        </Row>
        <Row className="m-0 pb-lg-5 pb-md-4 mb-lg-5 mb-md-4">
          <Info
            title={step_title_3}
            detail={step_detail_03}
            color={"#2355f0"}
            counter={3}
          />
          <CardItems />
        </Row>
      </div>
    </div>
  );
}
