import React from "react";
import Heading from "./heading/heading.js";
import Guide from "./Guide/guide.js";
import Reviews from "./Reviews/reviews.js";
import Expert from "./Expert";
import Accordion from "./Accordian/accordion.js";
import { useStaticQuery, graphql } from "gatsby";

export default function Work() {
  const data = useStaticQuery(graphql`
    {
      allCosmicjsWorks {
        edges {
          node {
            metadata {
              header
              step_detail_01
              step_detail_02
              step_detail_03
              step_title_02
              step_title_01
              step_title_3
              story_detail_01
              story_detail_2
              story_title_01
              story_title_02
              sub_heading
              exploring_answers {
                data {
                  title
                  detail
                  img
                }
              }
              story_media_01 {
                url
              }
              story_media_02 {
                url
              }
              question {
                data {
                  question
                  answer
                }
              }
            }
            slug
          }
        }
      }
    }
  `);

  var content_header;
  var content_stories;
  var content_guide;
  var content_questions;
  var content_explore;

  data.allCosmicjsWorks.edges.map((x, y) => {
    switch (x.node.slug) {
      case "header-work":
        content_header = x.node.metadata;
        break;
      case "work-stories":
        content_stories = x.node.metadata;
        break;
      case "guide":
        content_guide = x.node.metadata;
        break;
      case "few-questions":
        content_questions = x.node.metadata;
        break;
      case "exploring-fertility-answers":
        content_explore = x.node.metadata;
        break;
    }
  });

  console.log(data);
  return (
    <div className="work-page">
      <Heading
        heading={content_header.header}
        subheading={content_header.sub_heading}
      />
      <Guide
        step_detail_01={content_guide.step_detail_01}
        step_detail_02={content_guide.step_detail_02}
        step_detail_03={content_guide.step_detail_03}
        step_title_02={content_guide.step_title_02}
        step_title_01={content_guide.step_title_01}
        step_title_3={content_guide.step_title_3}
      />
      <Reviews
        story_detail_01={content_stories.story_detail_01}
        story_detail_2={content_stories.story_detail_2}
        story_title_01={content_stories.story_title_01}
        story_title_02={content_stories.story_title_02}
        story_media_01={content_stories.story_media_01.url}
        story_media_02={content_stories.story_media_02.url}
      />
      <Expert
        title="Exploring FertilityAnswers"
        content={content_explore.exploring_answers.data}
      />
      <Accordion content={content_questions.question.data} />
    </div>
  );
}
