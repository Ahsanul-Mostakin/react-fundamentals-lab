import React from "react";

function Style() {
  const ElementOne = {
    color: "red",
    background: "green",
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={ElementOne}>My first style components</h1>
    </div>
  );
}

export default Style;
