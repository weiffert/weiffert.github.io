import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  handleScroll = () => {
    if (this.props.scrollY > window.innerHeight / 2) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="Header">
        <div className="title">
          <NavLink to="/">
            <h1 className={`${this.handleScroll() ? "" : "small"}`}>
              William Eiffert
            </h1>
          </NavLink>
        </div>
        <div className={`links ${this.handleScroll() ? "invisible" : ""}`}>
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
