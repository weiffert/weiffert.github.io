import React, { Component } from "react";
import "./ProjectList.css";

import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        {this.props.repos.map(
          (repo, index) =>
            index < this.props.max ? (
              <ProjectItem project={repo} key={repo.id} />
            ) : (
              ""
            )
        )}
      </div>
    );
  }
}

export default ProjectList;
