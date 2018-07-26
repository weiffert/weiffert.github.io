import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Splash.css";

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <div>
          <NavLink to="/about">
            <p>web developer - student - coding for fun</p>
            <p>about</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Splash;
