import React from "react";

function Focus() {
  const FocusText = () => {
    console.log("You Have Focus on input tag");
  };

  const BlurText = () => {
    console.log("You Have BlurText on input");
  };

  return (
    <div>
      <br />
      <br />
      <h1>Focus events</h1>

      <input type="text" onFocus={FocusText} />
      <input type="text" onBlur={BlurText} />
    </div>
  );
}

export default Focus;
