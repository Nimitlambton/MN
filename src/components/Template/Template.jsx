import React, { Component } from "react";
import Workplace from "../common/workplace";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1> Helloworld use customize </h1>

        <Workplace> </Workplace>
      </div>
    );
  }
}

export default Template;
