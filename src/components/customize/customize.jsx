import React, { Component } from "react";
import Workplace from "../common/workplace";

import "react-bootstrap/dist/react-bootstrap";

import { Row } from "react-bootstrap";

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: "",
    };
    this.handelonchange = this.handelonchange.bind(this);
  }

  componentDidMount() {
    this.setUpFileUpload();
  }

  handelonchange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image1: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    return (
      <>
        <Row>
          <div class="col-sm-4 md">
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
                color: "RED",
              }}>
              Press to begin
            </button>
          </div>

          <div class="col-sm-8">
            <Workplace image={this.state.image1}> </Workplace>
          </div>
          <br></br>
        </Row>
        <input
          type="file"
          id="fileupload "
          accept="image/*"
          style={{ display: "none" }}
          onChange={this.handelonchange}></input>
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
