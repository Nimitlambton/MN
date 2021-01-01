import React, { Component } from "react";
import Workplace from "../workplace";
import Gbtn from "../gbtn";

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1> Helloworld use temp </h1>
        <input type="file" accept="image/png, image/jpeg"></input>
        <Workplace></Workplace>
        <Gbtn></Gbtn>
      </>
    );
  }
}

export default Customize;
