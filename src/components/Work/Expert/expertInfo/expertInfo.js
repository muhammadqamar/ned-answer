import React from "react";

export default function expertInfo(props) {
  return (
    <div className="Expertinfo">
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  );
}
