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
      <h2 className="programmer">Mostakin </h2>
    </div>
  );
}

export default Style;
