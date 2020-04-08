import React from "react";

import User from "./user.js";
import Social from "./social.js";

export default function Post({
  title,
  img,
  name,
  designation,
  thumbnail,
  answer,
  tag,

  answers
}) {
  return (
    <div className="post">
      <div className="details">
        <h1>{title}</h1>
        <User img={img} name={name} designation={designation} />
        <p className="solution">{answer}</p>
        <img src={thumbnail} />
        <Social replies={answers} tag={tag} />
      </div>
    </div>
  );
}
