import React, { Component } from "react";
import Workplace from "../workplace";
import Gbtn from "../gbtn";

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getImageData = this.getImageData.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  getImageData(event) {}

  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <>
        <Workplace></Workplace>
        <Gbtn></Gbtn>
      </>
    );
  }
}

export default Customize;
