import React, { Component } from "react";
import Fider from "./Fider";

class WelcomeAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      YourAge: true,
    };
  }

  render() {
    let I;
    if (this.state.YourAge) {
      I = "Welcome to Programing";
    } else {
      I = <Fider />;
    }
    return <div>{I}</div>;
  }
}
export default WelcomeAdmin;
