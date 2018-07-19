import React, { Component } from "react";
import "./Work.css";

import Splash from "./Splash";
import ProjectList from "./ProjectList";

class Work extends Component {
  render() {
    return (
      <div className="Work">
        Work
        <Splash />
        <ProjectList />
      </div>
    );
  }
}

export default Work;
