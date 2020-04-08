import React from "react";
import Header from "./header.js";
import FeaturedExpert from "./featured.js";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import Radiobutton from "./radiobuttons.js";
import Controls from "./controls.js";
import Results from "./result.js";
import "./assets/css/style.scss";
import Expertmedia from "./assets/images/expertImg.png";
import { fadeInLeft } from "react-animations";

import Radium, { StyleRoot } from "radium";

export default function Expert() {
  const openmobileoptions = () => {
    document.getElementById("expertpage").classList.toggle("open");
  };
  const styles = {
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
    },
  };
  const data = useStaticQuery(graphql`
    {
      allCosmicjsExperts {
        edges {
          node {
            metadata {
              heading_expert
              sub_heading_expert
              featured {
                data {
                  name
                  designation
                  Locaation
                  education
                  info
                  questionCount
                  PatientThankxCount
                  media
                }
              }
            }
            slug
          }
        }
      }
    }
  `);

  var content_featured;
  var content_expert_header;

  data.allCosmicjsExperts.edges.map((x, y) => {
    switch (x.node.slug) {
      case "featured":
        content_featured = x.node.metadata.featured.data;
        break;
      case "header-expert":
        content_expert_header = x.node.metadata;
        break;
      default:
        break;
    }
  });

  var filterradio = [
    "Birth Control",
    "Gamete Donation",
    "DIAGNOSTICS & TESTING",
    "Miscarriage",
    "Diet & Lifestyle",
    "fertility medication",
    "oncofertility",
    "retrievals & transfers",
  ];

  var partner = ["Clinic", "Company", "Individual Doctor"];

  var allExperts = {
    data: [
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
      {
        name: "Carrie Riestenber, MD",
        location: "Los Angeles, CA ",
        thanksCount: "12",
        answerCount: "35",
        data1: "OBGYN",
        data2: "REI Fellow",
        media: Expertmedia,
      },
    ],
  };

  return (
    <div className="experts" id="expertpage">
      <Header
        heading_expert={content_expert_header.heading_expert}
        sub_heading_expert={content_expert_header.sub_heading_expert}
      />
      <FeaturedExpert content={content_featured} />
      <div className="mainExpert">
        <div className="content">
          <Row>
            <Col lg={9} sm={12} md={12}>
              <h2>FIND Your Fertility Expert</h2>
              <Controls />
              <Results content={allExperts.data} />
            </Col>
            <Col sm={12} md={12} lg={3} className="hidden-xs">
              <h2>Fertile</h2>
              <Radiobutton title="Sort by Subtopic " content={filterradio} />

              <Radiobutton
                check="check"
                title="Sort By Partner Type"
                content={partner}
              />
            </Col>
          </Row>
        </div>
      </div>
      <StyleRoot>
        <div className="mobilefilters mainExpert" style={styles.bounce}>
          <div className="halfcontainer">
            <div className="close" onClick={openmobileoptions}>
              X
            </div>
            <div className="contentinner">
              <h3>Sort by</h3>
              <Radiobutton title="Subtopic " content={filterradio} />

              <Radiobutton
                check="check"
                title="Partner Type"
                content={partner}
              />
            </div>
            <div className="apply ">
              <button>Apply</button>
            </div>
          </div>
        </div>
      </StyleRoot>
    </div>
  );
}
