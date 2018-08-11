import React, { Component } from "react";
import "./Work.css";

import Splash from "./Splash";
import ProjectList from "./ProjectList";
import Header from "./Header";

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <Header scrollY={this.props.scrollY} />
        <Splash />
        <ProjectList max={this.props.repos.length} repos={this.props.repos} />
      </div>
    );
  }
}

export default Work;
