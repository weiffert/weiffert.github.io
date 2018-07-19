import React, { Component } from "react";
import "./ProjectList.css";

import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        ProjectList
        {/*
          * projects.map(project => <ProjectItem id={`${project.id}`}/>)
          */}
      </div>
    );
  }
}

export default ProjectList;
