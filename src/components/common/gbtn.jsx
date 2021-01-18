import React, { Component } from "react";

class Gbtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="btn-success" onClick={this.props.onGenerate}>
        Generate
      </button>
    );
  }
}

export default Gbtn;
