import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectItem.css";

class ProjectItem extends Component {
  render() {
    return (
      <div className="ProjectItem">
        <NavLink to={`project/${this.props.project.id}`}>
          {this.props.project.name}
        </NavLink>
      </div>
    );
  }
}

export default ProjectItem;
