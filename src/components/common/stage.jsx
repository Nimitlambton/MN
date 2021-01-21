import React, { Component } from "react";
import Customize from "../customize/customize";
import Template from "../Template/Template";

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // use to customize  Workplace on the basis of props received
    if (this.props.type === "Customize") {
      return <Customize> </Customize>;
    } else {
      return <Template></Template>;
    }
  }
}

export default Stage;
