import React from "react";

export default function User({ img, name, designation }) {
  return (
    <div className="User">
      <img src={img} />
      <h4>{name}</h4>
      <h6>{designation}</h6>
    </div>
  );
}
