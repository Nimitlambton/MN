import React, { Component } from "react";
import Workplace from "../common/workplace";
import Gbtn from "../common/gbtn";
import "./Customizestyle.css";
import "react-bootstrap/dist/react-bootstrap";
import { fabric } from "fabric";
import ReactDom from "react-dom";
import reactBootstrap from "react-bootstrap/dist/react-bootstrap";

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.clearr = this.clearr.bind(this);
  }

  componentDidMount() {
    this.setUpFileUpload();

    const canvas = new fabric.Canvas("workspace");
    console.log("woro");

    var circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100,
    });

    canvas.add(circle);
  }

  clearr() {
    console.log("hello");
    const canvas = new fabric.Canvas("workspace");

    canvas.clear();
    canvas.dispose();

    //const can = document.getElementById("workspace");

    //console.log(can);

    //document.dele

    var c = document.getElementsByClassName("canvas-container");
    console.log(c.length);

    for (var i = c.length - 1; i >= 0; --i) {
      c[i].remove();
    }
  }

  render() {
    return (
      <>
        <div className="stage">
          <button onClick={this.clearr}> clear </button>

          <button
            id="fileSelect"
            type="button"
            className="linkbutton"
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              textdecoration: "underline",
              display: "inline",
              marginTop: 200,
              padding: 5,
              marginLeft: 50,
              color: "RED",
            }}>
            Press to begin
          </button>

          <br></br>

          {/* <Workplace> </Workplace> */}
          <br></br>
          <Gbtn className="sticky-top"></Gbtn>

          <input
            type="file"
            id="fileupload "
            accept="image/*"
            style={{ display: "none" }}></input>

          <canvas
            width="500"
            height="400"
            id="workspace"
            style={{
              marginLeft: 350,

              marginBottom: 50,
            }}></canvas>
        </div>
      </>
    );
  }

  //helper functions

  //to upload image file by users
  setUpFileUpload() {
    const fileSelect = document.getElementById("fileSelect");
    const upload = document.getElementById("fileupload ");
    fileSelect.addEventListener(
      "click",
      (e) => {
        if (true) {
          upload.click();
        }
        e.preventDefault(); // prevent navigation to "#"
      },
      false
    );
  }
}

export default Customize;
