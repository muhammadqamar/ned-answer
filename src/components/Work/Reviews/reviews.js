import React from "react";
import "./assets/css/style.scss";
import { Row, Col } from "react-bootstrap";
import Michael from "./assets/images/michael-img.jpg";
import ReviewsDetail from "./reviewsDetail.js";
import ReviewsBanner from "./reviewsBanner.js";

export default function Reviews({
  story_detail_01,
  story_detail_2,
  story_title_01,
  story_title_02,
  story_media_01,
  story_media_02,
}) {
  return (
    <div className="reviews">
      <div className="content">
        <Row className="check">
          <ReviewsDetail
            story_detail_01={story_detail_01}
            story_title_01={story_title_01}
          />
          <ReviewsBanner img={story_media_01} />
        </Row>
        <Row className="mt-lg-5 pt-lg-5 check2">
          <Col xs={6} className="review-img">
            <img src={story_media_02} />
          </Col>
          <Col xs={6} className="pt-3">
            <h2 className="text-left">{story_title_02}</h2>
            <p>{story_detail_2}</p>
            <div className="partner d-flex justify-content-between align-items-center">
              <h5>Start your path to parenthood</h5>
              <a href="#">Join for free</a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
