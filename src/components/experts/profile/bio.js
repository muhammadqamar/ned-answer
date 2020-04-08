import React from "react";
import { Row, Col } from "react-bootstrap";

import like from "../assets/images/like.svg";
import answered from "../assets/images/message.svg";
import education from "../assets/images/education.svg";
import plus from "../assets/images/plus.svg";
import brief from "../assets/images/briefcase.svg";

export default function Bio({ content }) {
  return (
    <div className="Bio ">
      <div className="partialBG"></div>
      <div className="FeaturedExpert">
        <div className="content">
          <div className="box">
            <Row>
              <Col xs={12} sm={4}>
                <img src={content.media} className="profilepic" />
                <div className="counts">
                  <div className="answered">
                    <img src={answered} />
                    <h5>
                      {content.questionCount}
                      <span> Questions Answered</span>
                    </h5>
                  </div>
                  <div className="thankx">
                    <img src={like} />

                    <h5>
                      {content.likesCount} <span>Patients said Thanks</span>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={8}>
                <div className="details">
                  <h2>{content.name}</h2>
                  <h3>{content.location}</h3>
                  <h5>
                    <img src={plus} />
                    {content.data1}
                  </h5>

                  <h5>
                    <img src={brief} />
                    {content.data2}
                  </h5>
                  <div className="education-details">
                    <div>
                      <img src={education} />
                      <span>{content.education}</span>
                    </div>

                    <div className="social">
                      <button className="follow">
                        <a href="">Follow</a>
                      </button>
                      <button className="connect">
                        <a href="">Connect</a>
                      </button>
                    </div>
                  </div>
                  <p>
                    Passionate advocate, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam vulputate aliquam enim, at mollis
                    enim ultricies ac. Sed tincidunt, ex in consequat finibus,
                    mauris odio suscipit mauris, eget porttitor nisi dui id
                    lectus. Donec vulputate dui vitae dui cursus, vel pulvinar
                    nibh ultricies. <br /> <br />
                    Proin vestibulum lectus nec consequat semper. Mauris sodales
                    rhoncus augue a vestibulum. Donec ligula odio, sagittis nec
                    eros vel, finibus bibendum ante. educator and mama of a
                    fertility preservation miracle. Very grateful for the
                    wonderful field of fertility 0626 8091
                  </p>
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
        </div>
      </div>
    </div>
  );
}
