import React, { Component } from "react";
import "./ProjectList.css";

import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <div className="one">
          {this.props.repos.map(
            (repo, index) =>
              index < this.props.max && index % 2 === 0 ? (
                <ProjectItem project={repo} key={repo.id} />
              ) : (
                ""
              )
          )}
        </div>
        <div className="two">
          {this.props.repos.map(
            (repo, index) =>
              index < this.props.max && index % 2 !== 0 ? (
                <ProjectItem project={repo} key={repo.id} />
              ) : (
                ""
              )
          )}
        </div>
      </div>
    );
  }
}

export default ProjectList;
