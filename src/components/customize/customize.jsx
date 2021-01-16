import React, { Component } from "react";
import Workplace from "../common/workplace";
import "./Customizestyle.css";
import "react-bootstrap/dist/react-bootstrap";

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
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
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    return (
      <>
        <div className="stage">
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

          <Workplace image={this.state.image}> </Workplace>
          <br></br>

          <input
            type="file"
            id="fileupload "
            accept="image/*"
            style={{ display: "none" }}
            onChange={this.handelonchange}></input>
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
