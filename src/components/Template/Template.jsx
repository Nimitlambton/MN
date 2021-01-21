import React, { Component } from "react";
import Workplace from "../common/workplace";

import { Row } from "react-bootstrap";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myimage: "",
      val: 0,
    };

    this.populateTemplates = this.populateTemplates.bind(this);
  }

  componentDidMount() {
    this.populateTemplates = this.populateTemplates.bind(this);
    this.populateTemplates();
  }

  populateTemplates() {
    function importAll(r) {
      return r.keys().map(r);
    }

    const images = importAll(
      require.context("./Templates", false, /\.(png|jpeg|svg)$/)
    );

    images.forEach((element) => {
      var images = document.createElement("img");
      images.src = element;
      images.height = "50";
      images.width = "50";

      document.getElementById("myimg").appendChild(images);
      images.addEventListener(
        "click",
        function () {
          this.setState({ myimage: element });
        }.bind(this)
      );
    });
  }

  render() {
    return (
      <div>
        <Row>
          <div
            className="col-sm-4 md"
            id="myimg"
            style={{
              backgroundColor: "yellow",
              height: 200,
              width: 200,
            }}></div>
          <br />

          <div className="col-sm-8">
            <Workplace
              image={this.state.myimage}
              val={this.state.val}></Workplace>
          </div>
        </Row>
      </div>
    );
  }
}

export default Template;
