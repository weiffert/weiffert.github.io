import React, { Component } from "react";
import "./ProjectList.css";

import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      color: this.getColor(),
    };
    this.props.repos.forEach(repo => {
      this.state.colors.push(this.getColor());
    });
  }

  getColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() *
      255}, ${Math.random() * 255})`;
  };

  render() {
    return (
      <div
        className="ProjectList sideScroll"
        style={{ backgroundColor: this.state.color }}
      >
        {this.props.repos.map(
          (repo, index) =>
            index < this.props.max ? (
              <ProjectItem
                color={this.state.colors[index]}
                project={repo}
                key={repo.id}
              />
            ) : (
              ""
            )
        )}
        {/* <div className="one">
          {this.props.repos.map(
            (repo, index) =>
              index < this.props.max && index % 2 === 0 ? (
                <ProjectItem
                  color={this.state.colors[index]}
                  project={repo}
                  key={repo.id}
                />
              ) : (
                ""
              )
          )}
        </div>
        <div className="two">
          {this.props.repos.map(
            (repo, index) =>
              index < this.props.max && index % 2 !== 0 ? (
                <ProjectItem
                  color={this.state.colors[index]}
                  project={repo}
                  key={repo.id}
                />
              ) : (
                ""
              )
          )}
        </div> */}
      </div>
    );
  }
}

export default ProjectList;
