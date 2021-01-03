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
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        <Workplace></Workplace>
        <Gbtn></Gbtn>
      </>
    );
  }
}

export default Customize;
