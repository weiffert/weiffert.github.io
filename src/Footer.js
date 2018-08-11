import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>© William Eiffert</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:weiffert@purdue.edu"
        >
          weiffert@purdue.edu
        </a>
      </div>
    );
  }
}

export default Footer;
