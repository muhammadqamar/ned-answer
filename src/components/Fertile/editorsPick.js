import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Editor({ tagline, content }) {
  var settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
    <div className="Editors">
      <div className="content">
        <h2>{tagline}</h2>

        <Slider {...settings}>
          {content.map(x => {
            return (
              <div className="box">
                <img src={x.media} />
                <div className="details">
                  <h3>{x.categoryType}</h3>
                  <p>{x.description}</p>
                  <div className="user">
                    <img src={x.user.img} />
                    <h5>{x.user.name}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
