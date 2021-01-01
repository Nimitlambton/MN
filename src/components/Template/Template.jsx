import React, { Component } from "react";
import Workplace from "../workplace";
import Gbtn from "../gbtn";
class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1> Helloworld use customize </h1>
        <Workplace></Workplace>
        <Gbtn></Gbtn>
      </>
    );
  }
}

export default Template;
