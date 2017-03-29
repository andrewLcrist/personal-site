import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { Projects } from './Projects'

export const Header = () => {
  return (
  <Router className="header">
    <div>
    <ul className="header-content">
      <li className="header-tags"><Link to="/">HELLO</Link></li>
      <li className="header-tags"><Link to="/projects">Projects</Link></li>
    </ul>

    <Route exact path="/" component={Home}/>
    <Route exact path="/projects" component={Projects}/>
    </div>

  </Router>
)
}
