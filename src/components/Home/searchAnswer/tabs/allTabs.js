import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Tabdata from "./Tabdata/tabData.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
export default function Alltabs({ content }) {
  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

    autoplaySpeed: 1000
  };
  return (
    <>
      <div className="visible-desktop-only">
        <Tabs defaultActiveKey="expert0" id="uncontrolled-tab-example">
          {content.map((value, count) => {
            return (
              <Tab eventKey={"expert" + count} title={value.title}>
                <Tabdata title={value.title} data={value.content} />
              </Tab>
            );
          })}
        </Tabs>
      </div>
      <div className="visible-xs-only">
        <Slider {...settings}>
          {content.map((value, count) => {
            return <Tabdata title={value.title} data={value.content} />;
          })}
        </Slider>
      </div>
    </>
  );
}
