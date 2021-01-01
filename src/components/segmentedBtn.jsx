import React, { Component } from "react";
import "./style.css";
import Nav from "react-bootstrap/Nav";

class SegementedBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      type: "",
    };

    this.handelSelect = this.handelSelect.bind(this);
  }

  handelSelect(btn) {
    if (btn === "Customize") {
      console.log("show Custom");
    } else {
      console.log("Use temp");
    }
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Nav variant="pills" defaultActiveKey="Customize" className="Nav">
            <Nav.Item className="Nav-Item">
              <Nav.Link
                className="Nav-link"
                eventKey="Customize"
                id="1"
                onSelect={this.props.onchangeType}>
                Customize
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="Nav-Item">
              <Nav.Link
                className="Nav-link"
                eventKey="UseTemplate"
                onSelect={this.props.onchangeType}>
                <span>Use Template </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </>
    );
  }
}

export default SegementedBtn;
