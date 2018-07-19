import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink to="/project">work</NavLink>
        <NavLink to="/">William Eiffert</NavLink>
        <NavLink to="/about">about</NavLink>
      </div>
    );
  }
}

export default Header;
