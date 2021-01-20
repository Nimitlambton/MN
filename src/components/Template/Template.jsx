import React, { Component } from "react";
import Workplace from "../common/workplace";

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
        <h1> Helloworld use customize {this.state.myimage} </h1>

        <div
          id="myimg"
          style={{ backgroundColor: "yellow", height: 600, width: 600 }}></div>

        <Workplace image={this.state.myimage} val={this.state.val}></Workplace>
      </div>
    );
  }
}

export default Template;
