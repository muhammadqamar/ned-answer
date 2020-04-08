import React from "react";

export default function HeaderExpert({ heading_expert, sub_heading_expert }) {
  return (
    <div className="headers">
      <div className="content">
        <h1>{heading_expert}</h1>
        <p>{sub_heading_expert}</p>
      </div>
    </div>
  );
}
