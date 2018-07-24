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
          <NavLink to="/project">work</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </div>
    );
  }
}

export default Splash;
