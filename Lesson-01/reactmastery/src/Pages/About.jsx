import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ahsanul Mostakin",
      age: 25,
    };
  }

  render() {
    return (
      <>
        <h1>
          My name is {this.state.name} my age is {this.state.age}
        </h1>
      </>
    );
  }
}

export default About;
