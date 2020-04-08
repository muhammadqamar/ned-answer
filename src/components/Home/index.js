import React from "react";
import Banner from "./banner/index.js";
import SearchAnswer from "./searchAnswer/index.js";
import Expert from "./Expert/index.js";
import Gallerysection from "./gallerysection/index.js";
import PopularQuestions from "./popularQuestions/index.js";
import { useStaticQuery, graphql } from "gatsby";
export default function MainHome() {
  const data = useStaticQuery(graphql`
    {
      allCosmicjsHome {
        edges {
          node {
            slug
            metadata {
              content
              details
              heading
              mobile_app_details {
                data {
                  title
                  content
                }
              }
              story_link_button_text
              experts_information {
                data {
                  img
                  title
                  detial
                }
              }
              name
              story_link
              sub_heading
              background_image {
                url
              }
            }
          }
        }
      }
    }
  `);

  var content_header;
  var content_available_expert;
  var content_create_account;
  var content_stories;
  var content_mobile_app;
  data.allCosmicjsHome.edges.map((x, y) => {
    switch (x.node.slug) {
      case "heading":
        content_header = x.node.metadata;
        break;

      case "available-experts":
        content_available_expert = x.node.metadata;
        break;

      case "create-account":
        content_create_account = x.node.metadata;
        break;

      case "stories":
        content_stories = x.node.metadata;
        break;

      case "mobile-app":
        content_mobile_app = x.node.metadata;
        break;
    }
  });

  return (
    <div className="mainHome">
      <Banner
        heading={content_header.heading}
        subheading={content_header.sub_heading}
      />
      <PopularQuestions />
      <Expert
        heading={content_available_expert.heading}
        content={content_available_expert.experts_information.data}
      />

      <Gallerysection
        heading={content_create_account.heading}
        detail={content_create_account.details}
        name={content_stories.name}
        storydetail={content_stories.content}
        storybuttonLink={content_stories.story_link}
        background={content_create_account.background_image.url}
        storybuttontext={content_stories.story_link_button_text}
      />
      <SearchAnswer content={content_mobile_app.mobile_app_details.data} />
    </div>
  );
}
