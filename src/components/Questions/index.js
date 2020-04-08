import React, { useState, useEffect } from "react";
import PopularQuestions from "../Home/popularQuestions";

import { Row, Col } from "react-bootstrap";
import "./assets/css/style.scss";

import Categories from "./Categories/Categories.js";
import Post from "./questionPost/post.js";
import tag from "./assets/images/law.png";
import diet from "./assets/images/diet.png";
import surogacy from "./assets/images/surogacy.png";
import Heading from "./heading/heading.js";
import user from "./assets/images/user.png";
import post1 from "./assets/images/post1.png";
import post2 from "./assets/images/post2.png";
import Configuration from "./questionPost/configuration.js";
import { useStaticQuery, graphql } from "gatsby";

export default function MainHome() {
  const data_grapgql = useStaticQuery(graphql`
    {
      allCosmicjsAnswers {
        edges {
          node {
            slug
            metadata {
              heading
              sign_up_text
              sub_heading
              title
              questions {
                data {
                  user {
                    img
                    name
                  }
                  thumbnail
                  questions
                  answer
                }
              }
            }
          }
        }
      }
    }
  `);

  var content_header;
  var content_question_trending;

  data_grapgql.allCosmicjsAnswers.edges.map((x, y) => {
    switch (x.node.slug) {
      case "header-answers":
        content_header = x.node.metadata;
        break;
      case "trending-questions":
        content_question_trending = x.node.metadata;
    }
  });

  console.log(data_grapgql);
  var data = {
    categories: {
      heading: "categories",
      data: [
        {
          name: "Egg Quality",
          img: "egg_quality.png",
        },
        {
          name: "Treatment Planning",
          img: "treatement.png",
        },
        {
          name: "DIAGNOSTICS & TESTING",
          img: "testing.png",
        },
        {
          name: "Miscarriage",
          img: "miscarraige.png",
        },
        {
          name: "Diet & Lifestyle",
          img: "diet.png",
        },
        {
          name: "fertility medication",
          img: "medication.png",
        },
        {
          name: "oncofertility",
          img: "oncofertility.png",
        },
        {
          name: "retrievals & transfers",
          img: "transfers.png",
        },
        {
          name: "embryo screening",
          img: "screening.png",
        },
        {
          name: "birth control",
          img: "bithControl.png",
        },
        {
          name: "gamete donation",
          img: "donation.png",
        },
        {
          name: "surrogacy",
          img: "surogacy.png",
        },
        {
          name: "psychosocial",
          img: "psychosocial.png",
        },
        {
          name: "Reproductive law",
          img: "law.png",
        },
        {
          name: "stats & facts",
          img: "facts.png",
        },
        {
          name: "General",
          img: "general.png",
        },
      ],
    },
    heading: "Seeking answers as a community.",
    subHeading: {
      text:
        "Everything is free, anonymous and always reviewed by vetted, board-certified professionals. Don’t see your question? ",
      linkText: "Sign up and ask your own here.",
      linkAddress: "",
    },
    sorting: [
      {
        name: "sort by popularity",
      },
      {
        name: "sort by Top Rated",
      },
      {
        name: "sort by Top Answered Count",
      },
    ],
  };
  //headings

  return (
    <>
      <div className="qustionsPage">
        <div className="content">
          <Row>
            <Col xs={12}>
              <Heading
                heading={content_header.heading}
                subheading={content_header.sub_heading}
                link={content_header.sign_up_text}
              />
            </Col>
            <Col xs={12}>
              <PopularQuestions
                heading={content_question_trending.title}
                content={content_question_trending.questions.data}
              />
            </Col>
            <Col xs={12} sm={9}>
              <div className="post">
                <div className="configuration">
                  <h4>Questions</h4>
                  <Configuration />
                </div>
                <Post
                  title="What are the odds of getting boy/girl twins when implanting two embryos of unknown sex?"
                  img={user}
                  name="Santiago Munne, PhD"
                  designation="Geneticist, Researcher"
                  answer="PGD stands for Preimplantation Genetic Diagnosis and is indicated for couples that both partners are carriers of the same genetic disease, such as Cystic Fibrosis… (read more)"
                  thumbnail={post2}
                  tag={diet}
                  answers="10"
                />
                <Post
                  title="What are the odds of getting boy/girl twins when implanting two embryos of unknown sex?"
                  img={user}
                  name="Santiago Munne, PhD"
                  designation="Geneticist, Researcher"
                  answer="PGD stands for Preimplantation Genetic Diagnosis and is indicated for couples that both partners are carriers of the same genetic disease, such as Cystic Fibrosis… (read more)"
                  thumbnail={post1}
                  tag={tag}
                  answers="5"
                />

                <Post
                  title="What are the odds of getting boy/girl twins when implanting two embryos of unknown sex?"
                  img={user}
                  name="Santiago Munne, PhD"
                  designation="Geneticist, Researcher"
                  answer="PGD stands for Preimplantation Genetic Diagnosis and is indicated for couples that both partners are carriers of the same genetic disease, such as Cystic Fibrosis… (read more)"
                  tag={surogacy}
                  answers="2"
                />
              </div>
              <a className="seemore" href="">
                {" "}
                See More Questions
              </a>
            </Col>
            <Col xs={12} sm={3} className="cat_section">
              <h4>{data.categories.heading}</h4>

              {data.categories.data.map((x, y) => {
                return (
                  <Categories
                    title={x.name}
                    activeCount={"count" + y}
                    image={`${require("./assets/images/" + x.img)}`}
                  />
                );
              })}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
