import React from "react";

function Keyboard() {
  const OnKeyDownText = () => {
    console.log("Key pressed");
  };

  const OnKeyUpText = () => {
    console.log("KeyUp");
  };

  const onKeyPressd = () => {
    console.log("Key Pressed");
  };

  return (
    <div>
      <h1>Keyboard Event</h1>
      <input type="text" onKeyDown={OnKeyDownText} />
      <input type="text" onKeyUp={OnKeyUpText} />
      <input type="text" onKeyPress={onKeyPressd} />
    </div>
  );
}

export default Keyboard;
