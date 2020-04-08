import React from "react";
import { Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import like from "./assets/images/like.svg";
import answered from "./assets/images/message.svg";
import education from "./assets/images/education.svg";
import { Link } from "gatsby";

export default function FeaturedExpert({ content }) {
  var settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="FeaturedExpert">
      <div className="content">
        <h3>FEATURED EXPERTS </h3>
        <Slider {...settings}>
          {content.map((x, y) => {
            return (
              <div className="box">
                <Row>
                  <Col md={12} lg={4}>
                    <img src={x.media} className="profilepic" />
                    <div className="counts hidden-xs">
                      <div className="answered">
                        <img src={answered} />
                        <h5>
                          {x.questionCount}
                          <span> Questions Answered</span>{" "}
                        </h5>
                      </div>
                      <div className="thankx">
                        <img src={like} />

                        <h5>
                          {x.PatientThankxCount}{" "}
                          <span> Patients said Thanks</span>
                        </h5>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} lg={8}>
                    <div className="details">
                      <div className="box_sched">
                        <Link to="./experts/profile">
                          <h2>{x.name}</h2>
                        </Link>

                        <div className="social">
                          <button className="follow">
                            <a href="">Follow</a>
                          </button>
                          <button className="connect">
                            <a href="">Connect</a>
                          </button>
                        </div>
                      </div>
                      <h3>{x.designation}</h3>
                      <div className="location">{x.Locaation}</div>
                      <div className="education-details">
                        <img src={education} />
                        <span>{x.education}</span>
                      </div>
                      <div className="counts">
                        <div className="answered">
                          <img src={answered} />
                          <h5>
                            {x.questionCount}
                            <span> Questions Answered</span>{" "}
                          </h5>
                        </div>
                        <div className="thankx">
                          <img src={like} />

                          <h5>
                            {x.PatientThankxCount}{" "}
                            <span> Patients said Thanks</span>
                          </h5>
                        </div>
                      </div>
                      <p>{x.info}</p>
                      <div className="social check">
                        <button className="follow">
                          <a href="">Follow</a>
                        </button>
                        <button className="connect">
                          <a href="">Connect</a>
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
