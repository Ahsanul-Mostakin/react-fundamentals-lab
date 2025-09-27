import React, { Component } from "react";

class About extends Component {
  state = {
    name: "Ahsanul Mostakin",
    age: 25,
    Prof: "Content Creator",
  };
  render() {
    return (
      <>
        <h1>
          {"My name is " +
            this.state.name +
            ", My profession is " +
            this.state.Prof}
        </h1>
      </>
    );
  }
}

export default About;
