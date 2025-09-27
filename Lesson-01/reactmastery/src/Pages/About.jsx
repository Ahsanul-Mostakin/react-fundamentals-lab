import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ahsanul Mostakin",
      age: 25,
      Prof: "Content Creating",
    };

    // bind method here
    this.ChangeMind = this.ChangeValue.bind(this);
  }

  ChangeValue() {
    this.setState({
      Prof: "Freelancing",
    });
  }

  render() {
    return (
      <>
        <h1>My Profession is {this.state.Prof}</h1>
        <button onClick={this.ChangeMind}>Change Value</button>
      </>
    );
  }
}

export default About;
