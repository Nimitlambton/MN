import React from "react";
import ReactDom from "react-dom";
import WelcomeScreen from "./welcome";
import Footer from "./components/common/footer";
ReactDom.render(
  <>
    <WelcomeScreen> </WelcomeScreen>
    <Footer></Footer>
  </>,
  document.getElementById("root")
);
