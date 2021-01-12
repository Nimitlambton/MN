import React, { Component } from "react";
import Workplace from "../common/workplace";
import Gbtn from "../common/gbtn";
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
