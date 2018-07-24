import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>© 2018 by William Eiffert</p>
        <a target="_blank" href="mailto:weiffert@purdue.edu">
          weiffert@purdue.edu
        </a>
      </div>
    );
  }
}

export default Footer;
