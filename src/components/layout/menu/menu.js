//all imports
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import applestore from "../assets/images/applestore.png";
import playstore from "../assets/images/playstore.png";
import Features from "./features.js";
import FotterLink from "./links.js";
import { Link } from "gatsby";
import menuicon from "../header/assets/images/Toggle.svg";
import crosstoggle from "../header/assets/images/crosstoggle.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../state/app.js";
//main functions
export default function Menu({ toggle }) {
  const menustatus = useSelector((state) => state.app.openHambergermenu);

  const dispatch = useDispatch();

  //toggle hamberger menu
  var togglemenu = () => {
    document.getElementsByTagName("body")[0].classList.toggle("menuexpand");

    if (menustatus === false) {
      dispatch(toggleMenu(true));
    } else {
      dispatch(toggleMenu(false));
    }
  };
  //jsx
  return (
    <div className="content">
      <Row>
        <Col xs={12} sm={6} md={8}>
          <ul className="menuitems">
            <li>
              <Link to="/" onClick={togglemenu}>
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/Questions" onClick={togglemenu}>
                Answer{" "}
              </Link>
            </li>
            <li>
              <Link to="/experts" onClick={togglemenu}>
                Expert
              </Link>
            </li>

            <li>
              <Link to="/work" onClick={togglemenu}>
                How it works
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={togglemenu}>
                about{" "}
              </Link>
            </li>
          </ul>
          <div className="socialbox">
            <img src={applestore} />
            <img src={playstore} />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Features
            heading={"Fertile Edge Magazine"}
            info={"Check out articles written by our experts "}
            page={"fertile"}
            toggleclose={togglemenu}
          />
          <Features
            heading={"MedAnswers"}
            info={
              "Learn more about our parent company MedAnswers and other ways they are helping "
            }
            page={""}
            toggleclose={togglemenu}
          />
          <Features
            heading={"FAQ's"}
            info={
              "This section covers how to use the digital platform. Find fertility related answers in the top search bar"
            }
            page={"FAQs"}
            toggleclose={togglemenu}
          />
          <FotterLink close={togglemenu} />
        </Col>
      </Row>
    </div>
  );
}
