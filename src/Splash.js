import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Splash.css";

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <NavLink to="/">
          <h1>William Eiffert</h1>
        </NavLink>
        <div className="links">
          <NavLink to="/project">
            <p>work</p>
          </NavLink>
          <NavLink to="/about">
            <p>about</p>
          </NavLink>
          <p>
            <a target="_blank" href="mailto:weiffert@purdue.edu">
              weiffert@purdue.edu
            </a>
            <a target="_blank" href="https://github.com/weiffert">
              github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/william-eiffert/"
            >
              linkedin
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Splash;
