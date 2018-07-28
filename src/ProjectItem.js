import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectItem.css";

class ProjectItem extends Component {
  render() {
    return (
      <div
        className="ProjectItem"
        style={{ backgroundColor: this.props.color }}
      >
        <NavLink to={`project/${this.props.project.id}`}>
          <h1 className="name">{this.props.project.name}</h1>
          {/* <p className="description">{this.props.project.description}</p> */}
        </NavLink>
      </div>
    );
  }
}

export default ProjectItem;
