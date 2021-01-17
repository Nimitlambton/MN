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

        <div
          id="images"
          style={{ backgroundColor: "yellow", height: 500, width: 500 }}>
          <h1> here are all the images </h1>
        </div>

        <Workplace> </Workplace>
      </div>
    );
  }
}

export default Template;
