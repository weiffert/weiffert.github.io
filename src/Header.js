import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  handleScroll = height => {
    if (this.props.scrollY > height) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div
        className={`Header ${
          this.handleScroll(window.innerHeight * 0.3) ? "" : "fixed"
        }`}
      >
        <NavLink
          to="/about"
          className={`links ${
            this.handleScroll(window.innerHeight * 0.8) ? "invisible" : ""
          }`}
        >
          <p>about</p>
        </NavLink>
        <NavLink to="/" className="title">
          <h1
            className={`${
              this.handleScroll(window.innerHeight * 0.3) ? "" : "small"
            }`}
          >
            WILLIAM EIFFERT
          </h1>
        </NavLink>
        <NavLink
          to="/project"
          className={`links ${
            this.handleScroll(window.innerHeight * 0.8) ? "invisible" : ""
          }`}
        >
          <p>work</p>
        </NavLink>
      </div>
    );
  }
}

export default Header;
