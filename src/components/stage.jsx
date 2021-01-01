import React, { Component } from "react";
import Customize from "./customize/customize";
import Template from "./Template/Template";

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: false,
    };

    this.RenderStage = this.RenderStage.bind(this);
  }

  componentDidMount() {}

  RenderStage() {}

  render() {
    console.log(this.props.type);
    if (this.props.type === "Customize") {
      return <Customize></Customize>;
    } else {
      return <Template></Template>;
    }
  }
}

export default Stage;
