import React, { Component } from "react";
import "./ProjectList.css";

import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  getColor = (index, total) => {
    const multiplier = Math.floor((index / total) * 255);
    return `rgb(${multiplier}, ${multiplier}, ${multiplier})`;
  };

  render() {
    return (
      <div className="ProjectList sideScroll">
        {this.props.repos.map(
          (repo, index) =>
            index < this.props.max ? (
              <ProjectItem
                color={this.getColor(index + 1, this.props.repos.length)}
                project={repo}
                key={index}
                fontColor={index < this.props.max / 2 ? "white" : "black"}
              />
            ) : (
              ""
            )
        )}
      </div>
    );
  }
}

export default ProjectList;
