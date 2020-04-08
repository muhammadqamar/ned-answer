import React from "react";
import "./assets/css/styles.scss";
export default function CreateAccount({ text, color }) {
  const styles1 = {
    maxWidth: "230px",
    position: "absolute",
    top: "550px",
    background: color
  };
  return (
    <div className="CreateAccount" style={styles1}>
      <h1>{text}</h1>
      <button>
        <a href="">Join for free</a>
      </button>
    </div>
  );
}
