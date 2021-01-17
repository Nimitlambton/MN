import React, { Component } from "react";
import Workplace from "../common/workplace";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      console.log(images);
      document.getElementById("myimg").appendChild(images);
    });
  }

  render() {
    return (
      <div>
        <h1> Helloworld use customize </h1>

        <div
          id="myimg"
          style={{ backgroundColor: "yellow", height: 600, width: 600 }}>
          <h1> </h1>
        </div>

        <Workplace> </Workplace>
      </div>
    );
  }
}

export default Template;
