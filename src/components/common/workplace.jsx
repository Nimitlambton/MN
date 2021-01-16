import React, { Component } from "react";

import { fabric } from "fabric";

class Workplace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas("workspace", {
      backgroundColor: "red",
    });

    this.handelImageChange = this.handelImageChange.bind(this, this.canvas);
  }

  handelImageChange(canvas) {
    fabric.Image.fromURL(this.props.image, function (oImg) {
      // scale image down, and flip it, before adding it onto canvas
      oImg.scale(0.5).set("flipX", true);

      canvas.add(oImg);
    });
  }

  render() {
    return (
      <div>
        <img
          src={this.props.image}
          height="200"
          width="300"
          className="selectedImage"
          onLoad={this.handelImageChange}
        />
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
