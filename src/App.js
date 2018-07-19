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
          <Route path="/project/:id" render={() => <Project />} />
          <Route path="/project" render={() => <ProjectList />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/" render={() => <Work />} />
        </Switch>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
