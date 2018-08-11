import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import Work from "./Work";
import About from "./About";
import ProjectList from "./ProjectList";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      scrollY: 0,
    };
    if (false) {
      fetch("https://api.github.com/users/weiffert/repos")
        .then(response => response.json())
        .then(repos => {
          repos.sort((a, b) => (a.pushed_at > b.pushed_at ? -1 : 1));
          window.localStorage.setItem("repos", JSON.stringify(repos));
          this.setState({
            repos,
          });
        });
    } else {
      this.state.repos = JSON.parse(window.localStorage.getItem("repos"));
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    this.setState({ scrollY: window.scrollY });
  };

  render() {
    return (
      <div className="App">
        <Header scrollY={this.state.scrollY} />
        <Switch>
          <Route
            path="/project/:id"
            render={({ match }) => (
              <Project
                repo={this.state.repos.find(repo => repo.id == match.params.id)}
              />
            )}
          />
          <Route
            path="/project"
            render={() => (
              <ProjectList
                max={this.state.repos.length}
                repos={this.state.repos}
              />
            )}
          />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => ""} />
          <Route path="/" render={() => <Work repos={this.state.repos} />} />
        </Switch>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
