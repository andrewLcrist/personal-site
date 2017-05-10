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

  isActive(tag) {
    return 'header-tag ' + ((tag === this.state.active) ? 'active-tag' : 'default-tag')
  }

  toggleActive(tab) {
    this.setState({ active: tab })
  }

  render() {

  return (
    <div className="header-container">
      <ul className="header-content">
        <Link
          title="Hello"
          to="/"
          className={this.isActive('home')}
          onClick={() => this.toggleActive('home')}
          >HELLO
        </Link>
        <Link
          onMouseOver={() => this.setState({ projects: this.state.projects.toUpperCase()})}
          onMouseOut={() => this.setState({ projects: this.state.projects.toLowerCase()})}
          title="Projects"
          to="/projects"
          onClick={() => this.toggleActive('projects')}
          className={this.isActive('projects')}
          >{this.state.projects}
        </Link>
        <Link
          onMouseOver={() => this.setState({ contact: this.state.contact.toUpperCase()})}
          onMouseOut={() => this.setState({ contact: this.state.contact.toLowerCase()})}
          title="Contact"
          to="/contact"
          onClick={() => this.toggleActive('contact')}
          className={this.isActive('contact')}
          >{this.state.contact}
        </Link>
      </ul>
    </div>
)
}
}
