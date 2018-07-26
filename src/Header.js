import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  handleScroll = () => {
    if (this.props.scrollY > window.innerHeight * 0.3) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className={`Header ${this.handleScroll() ? "" : "fixed"}`}>
        <NavLink
          to="/about"
          className={`links ${this.handleScroll() ? "invisible" : ""}`}
        >
          <p>about</p>
        </NavLink>
        <NavLink to="/" className="title">
          <h1 className={`${this.handleScroll() ? "" : "small"}`}>
            WILLIAM EIFFERT
          </h1>
        </NavLink>
        <NavLink
          to="/project"
          className={`links ${this.handleScroll() ? "invisible" : ""}`}
        >
          <p>work</p>
        </NavLink>
      </div>
    );
  }
}

export default Header;
