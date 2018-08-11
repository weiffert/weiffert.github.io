import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectItem.css";

import Project from "./Project";

class ProjectItem extends Component {
  state = {
    expanded: false,
    display: false,
  };

  handleClick = event => {
    if (this.state.expanded === false) this.setState({ display: true });
    this.setState({ expanded: !this.state.expanded });
  };

  handleTransition = event => {
    if (!this.state.expanded)
      this.setState({
        display: false,
      });
  };

  render() {
    return (
      <div
        className={`ProjectItem ${this.state.expanded ? "expanded" : ""}`}
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleClick}
        onTransitionEnd={this.handleTransition}
      >
        {/* <NavLink to={`project/${this.props.project.id}`}> */}
        <h1 className="name">{this.props.project.name}</h1>
        {/* </NavLink> */}
        <div
          className={`description`}
          style={{ display: `${this.state.display ? "block" : "none"}` }}
        >
          <Project repo={this.props.project} />
        </div>
      </div>
    );
  }
}

export default ProjectItem;
