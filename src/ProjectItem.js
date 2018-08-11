import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectItem.css";

import Project from "./Project";

class ProjectItem extends Component {
  state = {
    expanded: false,
    invisible: false,
  };

  handleClick = event => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div
        className={`ProjectItem ${this.state.expanded ? "expanded" : ""}`}
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleClick}
      >
        {/* <NavLink to={`project/${this.props.project.id}`}> */}
        <h1 className="name">{this.props.project.name}</h1>
        {/* </NavLink> */}
        <div
          className={`description ${this.state.invisible ? "invisible" : ""}`}
        >
          <Project repo={this.props.project} />
        </div>
      </div>
    );
  }
}

export default ProjectItem;
