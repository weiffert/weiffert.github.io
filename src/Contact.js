import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>get in touch</h1>
        <a target="_blank" href="mailto:weiffert@purdue.edu">
          weiffert@purdue.edu
        </a>
        <a target="_blank" href="https://github.com/weiffert">
          github
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/william-eiffert/">
          linkedin
        </a>
        {/* <form>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="drop me a line..."
            required
          />
          <input
            type="name"
            id="name"
            name="name"
            placeholder="name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
        </form> */}
      </div>
    );
  }
}

export default Contact;
