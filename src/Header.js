import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="title">
          <NavLink to="/">
            <h1>William Eiffert</h1>
          </NavLink>
        </div>
        <div className="links invisible">
          <NavLink to="/about">
            <p>about</p>
          </NavLink>
          <NavLink to="/project">
            <p>work</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
