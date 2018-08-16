import React, { Component } from "react";
import Base64 from "base-64";
import Commonmark from "commonmark";
import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }

  componentDidUpdate = () => {
    if (this.props.load && this.state.body === "") {
      this.setState({ body: "loading....." });
      this.load();
    }
  };

  load = () => {
    // if (false) {
    fetch(`${this.props.repo.url}/readme`)
      .then(response => response.json())
      .then(response => {
        const markdown = Base64.decode(response.content);
        localStorage.setItem("markdown", JSON.stringify(markdown));
        this.setState({ body: markdown });
      });
    // } else {
    //   this.state = {
    //     body: JSON.parse(localStorage.getItem("markdown")),
    //   };
    // }
  };

  render() {
    const reader = new Commonmark.Parser();
    const render = new Commonmark.HtmlRenderer();
    const parsed = reader.parse(this.state.body);
    const html = render.render(parsed);
    return (
      <div className="Project" dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}

export default Project;
