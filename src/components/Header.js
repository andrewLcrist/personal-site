import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: 'projects',
      contact: 'contact'
    };
  }

  render() {

  return (
    <div className="header-container">
      <ul className="header-content">
        <Link title="Hello" to="/" className="header-tag">HELLO</Link>
        <Link
          onMouseOver={() => this.setState({ projects: this.state.projects.toUpperCase()})}
          onMouseOut={() => this.setState({ projects: this.state.projects.toLowerCase()})}
          title="Projects"
          to="/projects"
          className="header-tag"
          >{this.state.projects}
        </Link>
        <Link
          onMouseOver={() => this.setState({ contact: this.state.contact.toUpperCase()})} 
          onMouseOut={() => this.setState({ contact: this.state.contact.toLowerCase()})}
          title="Contact"
          to="/contact"
          className="header-tag"
          >{this.state.contact}
        </Link>
      </ul>
    </div>
)
}
}
