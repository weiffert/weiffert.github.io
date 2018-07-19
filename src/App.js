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
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Router path="/" render={() => <Work />} />
          <Router path="/about" render={() => <About />} />
          <Router path="/project" render={() => <ProjectList />} />
          <Router path="/project/:id" render={() => <Project />} />
        </Switch>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
