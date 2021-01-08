import React, { Component } from "react";
import Navbar from "./components/navbar";
import SegementedBtn from "./components/segmentedBtn";
import Stage from "./components/stage";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Customize",
    };

    this.handelStateType = this.handelStateType.bind(this);
  }

  handelStateType(type) {
    this.setState({ type: type });
  }

  render() {
    return (
      <>
        <Navbar> </Navbar>
        <main className="container">
          <SegementedBtn onchangeType={this.handelStateType}></SegementedBtn>
          <hr></hr>
        </main>
      </>
    );
  }
}

export default WelcomeScreen;
