import React from "react";

export default function data({ user = {}, question, answer, thumbnail }) {
  return (
    <div className="slider-box">
      <p>{question}</p>
      <div className="post">
        {user.hasOwnProperty("img") && (
          <>
            <img src={user.img} />
            <h4>{user.name}</h4>
          </>
        )}
        <p>{answer}</p>
        {thumbnail && <img src={thumbnail} className="thumbnail" />}
      </div>
    </div>
  );
}
