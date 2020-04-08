import React, { useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Patient from "./patient.js";
import "./assets/css/style.scss";
import { useStaticQuery, graphql } from "gatsby";
import Joincom from "../../components/misc/CreateAccount.js";

export default function FAQ() {
  const data = useStaticQuery(graphql`
    {
      allCosmicjsFaqs {
        edges {
          node {
            slug
            metadata {
              heading
              subheading
              expert_faqs {
                data {
                  question
                  answer
                }
              }
              patients_faqs {
                data {
                  question
                  answer
                }
              }
            }
          }
        }
      }
    }
  `);

  var content_patient;
  var content_expert;
  var content_header;

  data.allCosmicjsFaqs.edges.map((x, y) => {
    switch (x.node.slug) {
      case "patients":
        content_patient = x.node.metadata.patients_faqs.data;
        break;
      case "experts":
        content_expert = x.node.metadata.expert_faqs.data;
        break;
      case "header":
        content_header = x.node.metadata;
        break;
    }
  });
  return (
    <div className="FAQ">
      <div className="container">
        <div className="heaidng">
          <h1>{content_header.heading}</h1>
          <p>{content_header.subheading}</p>
        </div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="For Patients">
            <Patient content={content_patient} />
          </Tab>
          <Tab eventKey="profile" title="For Experts">
            <Patient content={content_patient} />
          </Tab>
        </Tabs>
        <Joincom
          color="#ee503a"
          text="Create an account 
and get connected 
with patients"
        />
      </div>
    </div>
  );
}
