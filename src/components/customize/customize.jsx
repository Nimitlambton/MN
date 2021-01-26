import React, { Component } from "react";
import Workplace from "../common/workplace";
import "react-bootstrap/dist/react-bootstrap";
import { Row } from "react-bootstrap";

class Customize extends Component {
  constructor(props) {
    super(props);

    //browse image sent to workspace to rendered

    this.state = {
      image: "",
    };
    this.handelonchange = this.handelonchange.bind(this);
  }

  componentDidMount() {
    this.setUpFileUpload(); //helping in file uploading
  }

  render() {
    return (
      <>
        <Row>
          <div className="col-sm-4 md">
            {/* works as  button in alternate to input file  */}
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

          {/* workspace and the main div that handel all fabric.js functions */}

          <div className="col-sm-8">
            <Workplace image={this.state.image}> </Workplace>
          </div>
          <br></br>
        </Row>

        {/* hidden input button */}
        <input
          type="file"
          id="fileupload "
          accept="image/*"
          style={{ display: "none" }}
          onChange={this.handelonchange}></input>
      </>
    );
  }

  //Helper functions

  //this functions handles and read file from the input type file and set states in the base64 image
  handelonchange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  //this functions helps in uploading user selected image  by click select file input that is hidden with the help of css
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
