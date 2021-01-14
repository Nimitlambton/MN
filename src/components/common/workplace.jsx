import React, { Component } from "react";

import { fabric } from "fabric";

class Workplace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const canvas = new fabric.Canvas("workspace", {
      backgroundColor: "yellow",
    });

    var triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50,
    });

    canvas.add(text);
  }

  render() {
    return (
      <div>
        <canvas
          width="500"
          height="400"
          id="workspace"
          style={{
            marginLeft: 350,

            marginBottom: 50,
          }}></canvas>
      </div>
    );
  }
}

export default Workplace;
