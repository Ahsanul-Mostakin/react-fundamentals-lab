import React from "react";
import "./Style.css";

function Style() {
  const ElementOne = {
    color: "white",
    background: "green",
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={ElementOne}>My first style components</h1>
      <h2 className="error">Mostakin </h2>
      <h2 className="error">Mostakin </h2>
      <p>This is p tag 2</p>
    </div>
  );
}

export default Style;
