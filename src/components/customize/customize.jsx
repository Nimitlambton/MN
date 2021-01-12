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

        <button
          id="fileSelect"
          type="button"
          className="link-button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            textdecoration: "underline",
            display: "inline",
            margin: 0,
            padding: 0,
            color: "RED",
          }}>
          Press me, I look like a link
        </button>
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
