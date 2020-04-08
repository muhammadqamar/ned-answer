import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Categories({ image, title, activeCount }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  var selectCat = e => {
    document
      .getElementsByClassName("Categories " + e)[0]
      .classList.toggle("active");
  };

  return (
    <div
      className={"Categories " + activeCount}
      onClick={selectCat.bind(this, activeCount)}
    >
      <div style={{ display: "flex" }}>
        <img src={image} />
        <h2>{title}</h2>
      </div>
      <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
