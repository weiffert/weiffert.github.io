import React, { Component } from "react";
import "./ProjectList.css";

import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
    fetch("https://api.github.com/users/weiffert/repos")
      .then(response => response.json())
      .then(repos =>
        this.setState({
          repos,
        })
      );
  }

  render() {
    return (
      <div className="ProjectList">
        ProjectList
        {this.state.repos.map(repo => <ProjectItem project={repo} />)}
      </div>
    );
  }
}

export default ProjectList;
