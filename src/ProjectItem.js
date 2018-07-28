import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectItem.css";

class ProjectItem extends Component {
  state = {
    class: "ProjectItem",
    expanded: "expanded",
    className: "ProjectItem",
  };

  handleClick = event => {
    if (this.state.className.indexOf(this.state.expanded) != -1)
      this.setState({ className: this.state.class });
    else
      this.setState({
        className: `${this.state.class} ${this.state.expanded}`,
      });
  };

  render() {
    return (
      <div
        className={this.state.className}
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleClick}
      >
        <NavLink to={`project/${this.props.project.id}`}>
          <h1 className="name">{this.props.project.name}</h1>
          {/* <p className="description">{this.props.project.description}</p> */}
        </NavLink>
      </div>
    );
  }
}

export default ProjectItem;
