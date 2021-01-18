import React, { Component } from "react";
import { fabric } from "fabric";
import Gbtn from "../common/gbtn";

class Workplace extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log("myimageis" + this.props.val);
  }

  //initiate fabric canvas and text1 and Text2
  componentDidMount() {
    console.log(this.props.image);

    this.canvas = new fabric.Canvas("workspace", {
      backgroundColor: "red",
    });

    var text = new fabric.IText("Enter your text here!", {
      fontFamily: "Cursive",
      left: 50,
    });

    var text2 = new fabric.IText("Enter your text here!", {
      left: 60,
      top: 340,
    });

    this.canvas.add(text);
    this.canvas.add(text2);

    this.handelImageChange = this.handelImageChange.bind(this, this.canvas);
    this.handelGenerate = this.handelGenerate.bind(this, this.canvas);
  }

  //todo ::
  componentWillReceiveProps() {}

  render() {
    return (
      <div>
        <img
          src={this.props.image}
          height="200"
          width="300"
          className="selectedImage"
          onLoad={this.handelImageChange}
          style={{ display: "none" }}
          alt="dummyImage"
        />

        <canvas
          width="500"
          height="400"
          id="workspace"
          style={{
            marginLeft: 350,

            marginBottom: 50,
          }}></canvas>

        <Gbtn onGenerate={this.handelGenerate}></Gbtn>
      </div>
    );
  }

  //Helping function

  //Handel changes on image change and adds it to canvas
  handelImageChange(canvas) {
    fabric.Image.fromURL(this.props.image, function (oImg) {
      // scale image down, and flip it, before adding it onto canvas
      oImg.scale(0.5).set("flipX", true);

      canvas.add(oImg);
    });
  }

  //converts canvas to base64Image
  handelGenerate() {
    var canvas = document.getElementById("workspace");
    var image = canvas
      .toDataURL("image/png", 1.0)
      .replace("image/png", "image/octet-stream");

    var link = document.createElement("a");
    link.download = "my-image.png";
    link.href = image;
    link.click();
  }
}

export default Workplace;
