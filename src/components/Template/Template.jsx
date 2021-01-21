import React, { Component } from "react";
import Workplace from "../common/workplace";

import { Row } from "react-bootstrap";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myimage: "", //image that is selected by user is sent
      val: 0,
    };

    //binding to get all the things in  constructor
    this.populateTemplates = this.populateTemplates.bind(this);
  }

  componentDidMount() {
    //binding to get all the things in compnents did mount
    this.populateTemplates = this.populateTemplates.bind(this);

    //to populate user templates
    this.populateTemplates();
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

          <div className="col-sm-8">
            <br />
            <Workplace
              image={this.state.myimage}
              val={this.state.val}></Workplace>
          </div>
        </Row>
      </div>
    );
  }

  //Helping functions

  //This function helps  in importing all files in the folder that are kept in Templates  and render in div with ID myimg

  populateTemplates() {
    //function that help in to import all the images from the folder
    function importAll(r) {
      return r.keys().map(r);
    }

    const images = importAll(
      require.context("./Templates", false, /\.(png|jpeg|svg)$/)
    );

    //loops that helping to render images in  div  and helps to set onClick function
    //that further helps in to change the state on userSelection

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
}

export default Template;
