import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className=" fixed-bottom  bg-danger text-center text-lg-start">
        <div className="text-center p-3">
          © 2020 Copyright: Nimit pamnani || Made with &hearts; in Toronto
          <span role="img" aria-label="flagCanada">
            🇨🇦
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
