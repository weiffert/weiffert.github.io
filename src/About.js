import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <NavLink to="/">{"<< Back"}</NavLink>
        <div className="header">
          <h1>Hello!</h1>
          <h2>My name is William Eiffert</h2>
        </div>
         <p>
          <a
            href="https://drive.google.com/file/d/1UXZD6cf6yZwtI7cAW-37T8piALo64gpq/view?usp=sharing"
            target="_blank"
          >
            {"< Resume />"}
          </a>
        </p>
        <p>
          I am a student developer with budding curiosity from security to
          development. I have experimented in low level C, object oriented Java,
          and super capable JavaScript and React.
        </p>
        <p>
          My enthrallment with code began over four years ago with simplistic
          Codecademy tutorials, and once I caught the bug, there was no turning
          back. My first organized experience was in classes, but quickly I
          devoted more of my personal thoughts and time to the subject. The
          thrill of discovery, creation, and exploration of new worlds of the
          mind became my creative outlet as the computer gave them form. This is
          my reasoning of why I love this field. And now, I study it at Purdue
          (Go Boilermakers).
        </p>
        <p>
          If you have an idea you want realized or a project you need help with,
          drop me a line.
        </p>
     </div>
    );
  }
}

export default About;
