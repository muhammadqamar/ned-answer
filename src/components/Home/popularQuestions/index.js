//all imports
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import more from "./assets/images/more.svg";
import "./assets/css/style.scss";
import Sliderdata from "./sliderdata/data.js";

//main function
export default function PopularQuestions({ heading, content = [] }) {
  //slick slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: "40px",
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var slider = [
    {
      questions:
        "I can not give birth naturally and have seriously considered a surrogate. I have no idea where to start. Help!",
      user: {
        img: "user.png",
        name: "Santiago Munne, PhD",
      },
      answer:
        "Finding a surrogate is a lengthy and complicated process but could …(read more)",
      thumbnail: "post2.png",
    },
    {
      questions:
        "I can not give birth naturally and have seriously considered a surrogate. I have no idea where to start. Help!",
      user: {
        img: "user.png",
        name: "Santiago Munne, PhD",
      },
      answer:
        "Finding a surrogate is a lengthy and complicated process but could …(read more)",
      thumbnail: "",
    },
    {
      questions:
        "I can not give birth naturally and have seriously considered a surrogate. I have no idea where to start. Help!",
      user: {
        img: "user.png",
        name: "Santiago Munne, PhD",
      },
      answer:
        "Finding a surrogate is a lengthy and complicated process but could …(read more)",
      thumbnail: "post2.png",
    },
    {
      questions:
        "I can not give birth naturally and have seriously considered a surrogate. I have no idea where to start. Help!",
      user: {
        img: "user.png",
        name: "Santiago Munne, PhD",
      },
      answer:
        "Finding a surrogate is a lengthy and complicated process but could …(read more)",
      thumbnail: "post1.png",
    },
  ];

  return (
    <div className="PopularQuestions">
      <div className="content">
        <Row>
          <Col sm={12}>
            <h6>{heading}</h6>
            <Slider {...settings}>
              {content.map((x) => {
                if (!x.hasOwnProperty("title")) {
                  return (
                    <Sliderdata
                      user={x.user}
                      question={x.questions}
                      answer={x.answer}
                      thumbnail={x.thumbnail}
                    />
                  );
                }
              })}
            </Slider>

            <a className="morelink">
              See More Questions
              <img src={more} />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
