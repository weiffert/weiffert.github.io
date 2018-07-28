import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Splash.css";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInterval: 25,
      timeout: 2000,
      intervalId: "",
      currentAbout: "",
      currentOther: "",
      about: {
        one: "web developer - student - coding for fun",
        two: "about",
      },
    };
    this.state.currentAbout = this.state.about.one;
  }

  componentDidMount = () => {
    setTimeout(this.changeText, this.state.timeout);
  };

  changeText = () => {
    this.setState({
      intervalId: setInterval(this.removeText, this.state.timeInterval),
    });
    if (this.state.currentAbout === this.state.about.one)
      this.setState({ currentOther: this.state.about.two });
    else this.setState({ currentOther: this.state.about.one });
  };

  removeText = () => {
    this.setState({
      currentAbout: this.state.currentAbout.substr(
        0,
        this.state.currentAbout.length - 1
      ),
    });

    if (this.state.currentAbout.length === 0) {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: setInterval(this.addText, this.state.timeInterval),
      });
    }
  };

  addText = () => {
    this.setState({
      currentAbout: this.state.currentOther.substr(
        0,
        this.state.currentAbout.length + 1
      ),
    });

    if (this.state.currentAbout === this.state.currentOther) {
      clearInterval(this.state.intervalId);
      setTimeout(this.changeText, this.state.timeout);
    }
  };

  render() {
    return (
      <div className="Splash">
        <div>
          <NavLink to="/about">
            <p>{this.state.currentAbout}</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Splash;
