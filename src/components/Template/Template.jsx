import React, { Component } from "react";
import Workplace from "../common/workplace";
import Gbtn from "../common/gbtn";
import { fabric } from "fabric";
class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.clearr = this.clearr.bind(this);
  }

  clearr() {
    console.log("hello");
    const canvas = new fabric.Canvas("workspace");

    canvas.clear();
    canvas.dispose();

    var c = document.getElementsByClassName("canvas-container");
    console.log(c.length);

    for (var i = c.length - 1; i >= 0; --i) {
      c[i].remove();
    }
  }

  componentDidMount() {
    const canvas = new fabric.Canvas("workspace");

    var circle = new fabric.Circle({
      radius: 50,
      fill: "green",
      left: 100,
      top: 100,
    });

    canvas.add(circle);
  }

  render() {
    return (
      <div>
        <button onClick={this.clearr}> clear </button>
        <h1> Helloworld use customize </h1>

        <canvas
          width="500"
          height="400"
          id="workspace"
          style={{
            marginLeft: 350,

            marginBottom: 50,
          }}></canvas>

        <Gbtn></Gbtn>
      </div>
    );
  }
}

export default Template;
