import React from "react";
import "./assets/css/style.scss";
import Header from "./header.js";
import Support from "./support.js";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Crew from "./crew.js";
import JoinTeam from "./joinTeam.js";
import BiggerTime from "./biggerPicture.js";
export default function AboutUs() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allCosmicjsAbouts {
        edges {
          node {
            slug
            metadata {
              tags {
                imgix_url
              }
              video

              disease_01
              disease_02
              disease_03
              disease_04
              information

              subheading
              heading
              supportheading
              crew_heading
              crew_tag_line
              crew_members {
                data {
                  name
                  description
                  image
                }
              }
              videotext
              join_team_image {
                url
              }
              join_team_heading
              join_team_subheading
              support {
                data {
                  detials
                  imgcolor
                  title
                }
              }
            }
          }
        }
      }
    }
  `);
  var content_header;
  var content_support;
  var content_crew;
  var content_join;
  var content_bigger_picture;

  data.allCosmicjsAbouts.edges.map((x, y) => {
    switch (x.node.slug) {
      case "01-header":
        content_header = x.node.metadata;
        break;

      case "02-support":
        content_support = x.node.metadata;
        break;

      case "03-crew":
        content_crew = x.node.metadata;
        break;

      case "04-join-team":
        content_join = x.node.metadata;
        break;

      case "bigger-picture":
        content_bigger_picture = x.node.metadata;
        break;
    }
  });

  return (
    <div className="aboutpagemain">
      <Header
        image={content_header.video}
        heading={content_header.heading}
        subheading={content_header.subheading}
        tag={content_header.tags.imgix_url}
        videotext={content_header.videotext}
      />
      <div className="support">
        <div className="content">
          <Row>
            <Col xs={12}>
              <h1>{content_support.supportheading}</h1>
            </Col>

            {content_support.support.data.map((x) => {
              return (
                <Col sm={4}>
                  <Support
                    image={x.imgcolor}
                    title={x.title}
                    detials={x.detials}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <Crew
        tagline={content_crew.crew_tag_line}
        heading={content_crew.crew_heading}
        members={content_crew.crew_members.data}
      />

      <JoinTeam
        heading={content_join.join_team_heading}
        detail={content_join.join_team_subheading}
        img={content_join.join_team_image.url}
      />

      <BiggerTime
        disease_01={content_bigger_picture.disease_01}
        disease_02={content_bigger_picture.disease_02}
        disease_03={content_bigger_picture.disease_03}
        disease_04={content_bigger_picture.disease_04}
        information={content_bigger_picture.content_bigger_picture}
      />
    </div>
  );
}
