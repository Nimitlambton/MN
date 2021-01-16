import React, { Component } from "react";
import Customize from "../customize/customize";
import Template from "../Template/Template";
import "./style.css";

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: false,
    };
  }

  render() {
    // use to customize  Workplace
    if (this.props.type === "Customize") {
      return <Customize> </Customize>;
    } else {
      return <Template></Template>;
    }
  }
}

export default Stage;
