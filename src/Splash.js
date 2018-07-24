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
          <p>web developer - student - coding for fun</p>
        </div>
      </div>
    );
  }
}

export default Splash;
