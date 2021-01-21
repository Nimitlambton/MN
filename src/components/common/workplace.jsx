import React, { Component } from "react";
import { fabric } from "fabric";
import Gbtn from "../common/gbtn";

class Workplace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //initiate fabric canvas and text1 and Text2
  componentDidMount() {
    this.renderTextAndFabricCanvas = this.renderTextAndFabricCanvas.bind(this);
    this.renderTextAndFabricCanvas();
  }

  //todo ::
  componentWillReceiveProps() {}

  render() {
    return (
      <div>
        {/* dummy image  to clone data in to div*/}

        <img
          src={this.props.image}
          height="200"
          width="300"
          className="selectedImage"
          onLoad={this.handelImageChange}
          style={{ display: "none" }}
          alt="dummyImage"
        />

        {/* workspace  Main canvas */}
        <div className="row">
          <div className="col">
            <canvas width="500" height="400" id="workspace"></canvas>
          </div>

          <br></br>

          {/* Generate btn  */}
          <div className="col">
            <Gbtn onGenerate={this.handelGenerate}></Gbtn>
          </div>
        </div>
      </div>
    );
  }

  //Helping function

  //Handel changes on image change and adds it to canvas
  handelImageChange(canvas) {
    fabric.Image.fromURL(this.props.image, function (oImg) {
      // scale image down, and flip it, before adding it onto canvas
      oImg.scale(0.1);

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

  //This function helps to render text and fabric canvas

  renderTextAndFabricCanvas() {
    const canvas = new fabric.Canvas("workspace", {
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

    canvas.add(text);
    canvas.add(text2);

    this.handelImageChange = this.handelImageChange.bind(this, canvas);
    this.handelGenerate = this.handelGenerate.bind(this, canvas);
  }
}

export default Workplace;
