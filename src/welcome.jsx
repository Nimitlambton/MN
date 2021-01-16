import React, { Component } from "react";
import Navbar from "./components/common/navbar";
import SegementedBtn from "./components/common/segmentedBtn";
import Stage from "./components/common/stage";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Customize",
    };

    this.handelStateType = this.handelStateType.bind(this);
  }

  //set states to chnage type
  handelStateType(type) {
    this.setState({ type: type });
  }

  render() {
    return (
      <>
        {/* navbar for brand name only */}
        <Navbar> </Navbar>

        <main className="container">
          <SegementedBtn onchangeType={this.handelStateType}> </SegementedBtn>

          <hr></hr>

          {/* container  to preview either customize ws or template ws  */}

          <Stage type={this.state.type}></Stage>
        </main>
      </>
    );
  }
}

export default WelcomeScreen;
