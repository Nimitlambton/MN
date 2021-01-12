import React, { Component } from "react";
import Workplace from "../common/workplace";
import Gbtn from "../common/gbtn";

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setUpFileUpload();
  }

  render() {
    return (
      <>
        <Workplace></Workplace>
        <Gbtn></Gbtn>

        <input
          type="file"
          id="fileupload "
          accept="image/*"
          style={{ display: "none" }}></input>

        <a href="#" id="fileSelect" style={{ marginLeft: "10px" }}>
          select some files to Begin
        </a>
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
