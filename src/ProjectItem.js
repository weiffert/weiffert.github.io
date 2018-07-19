import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectItem.css";

class ProjectItem extends Component {
  render() {
    return (
      <div className="ProjectItem">
        ProjectItem
        <NavLink to={`project/${this.props.id}`} />
      </div>
    );
  }
}

export default ProjectItem;
