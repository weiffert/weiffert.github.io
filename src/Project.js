import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    console.log(this.props);
    return <div className="Project">Project {this.props.repo.name}</div>;
  }
}

export default Project;
