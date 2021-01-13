import React, { Component } from "react";

import { fabric } from "fabric";

class Workplace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const canvas = new fabric.Canvas("workspace");
  }

  render() {
    return (
      <>
        <canvas
          width="500"
          height="400"
          id="workspace"
          style={{
            marginLeft: 350,

            marginBottom: 50,
          }}></canvas>
      </>
    );
  }
}

export default Workplace;
