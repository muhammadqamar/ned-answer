import React from "react";

export default function expertInfo({ img, title, info }) {
  return (
    <div className="Expertinfo">
      <img src={img} />
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}
