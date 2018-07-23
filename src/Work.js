import React, { Component } from "react";
import "./Work.css";

import Splash from "./Splash";
import ProjectList from "./ProjectList";

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <Splash />
        <ProjectList max={5} repos={this.props.repos} />
      </div>
    );
  }
}

export default Work;
