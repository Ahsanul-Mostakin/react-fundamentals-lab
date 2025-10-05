import React from "react";

function User({ username, textcolor }) {
  let styles = {
    color: textcolor,
  };

  return (
    <div>
      <h1 style={styles}>Hello,{username}</h1>
    </div>
  );
}

export default User;
