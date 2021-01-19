import React, { Component } from "react";

import "react-bootstrap/dist/react-bootstrap";

class Gbtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="btn-success m-2" onClick={this.props.onGenerate}>
        Generate
      </button>
    );
  }
}

export default Gbtn;
