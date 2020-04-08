import React from "react";

export default function AboutUs({
  image,
  tag,
  heading,
  subheading,
  videotext,
}) {
  return (
    <div className="header">
      <div className="details">
        <div className="content">
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </div>
      </div>
      <div className="videosection">
        <div className="content">
          <iframe
            src={image}
            width="100%"
            height="600px"
            frameborder="0"
            allowfullscreen
            className="video"
          ></iframe>
          <img className="tag" src={tag} />
          <h2>{videotext}</h2>
        </div>
      </div>
    </div>
  );
}
