import React, { Component } from "react";
import Navbar from "./components/common/navbar";
import SegementedBtn from "./components/common/segmentedBtn";
import Stage from "./components/common/stage";
import Footer from "./components/common/footer";

//import { Container } from "react-bootstrap";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Customize", //
    };

    this.handelStateType = this.handelStateType.bind(this);
  }

  //set states to change type getting data via segmented btn and changes type of stages to be rendered

  handelStateType(type) {
    this.setState({ type: type });
  }

  render() {
    return (
      <>
        {/* navbar for brand name only */}

        <Navbar> </Navbar>

        <main
          className="container-fluid p-3 my-3  text-white"
          style={{ backgroundColor: "khaki" }}>
          <SegementedBtn onchangeType={this.handelStateType}></SegementedBtn>

          {/* container  to preview either customize ws or template ws  gets data from Segmented_btn  */}
          <hr></hr>
          <Stage type={this.state.type}></Stage>
        </main>

        <Footer></Footer>
      </>
    );
  }
}

export default WelcomeScreen;
