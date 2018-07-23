import React, { Component } from "react";
import Base64 from "base-64";
import Commonmark from "commonmark";
import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "BAD wifi. PLEASE bear WITH me.",
    };
    fetch(`${this.props.repo.url}/readme`)
      .then(response => response.json())
      .then(response => {
        const markdown = Base64.decode(response.content);
        this.setState({ body: markdown });
      });
  }
  render() {
    console.log(this.props);
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
