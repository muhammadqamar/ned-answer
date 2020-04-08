import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import Slider from "react-slick";
export default function Crew({ tagline, heading, members }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="Crew">
      <div className="content">
        <h3>{tagline}</h3>
        <p>{heading}</p>
        <Slider {...settings}>
          {members.map(x => {
            return (
              <div className="eachitem">
                <img src={x.image} />
                <h5>{x.name}</h5>
                <h6>{x.description}</h6>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
