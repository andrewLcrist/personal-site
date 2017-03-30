import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <ul className="header-content">
        <Link to="/" className="header-tags"><li >HELLO</li></Link>
        <Link to="/projects" className="header-tags"><li>Projects</li></Link>
        <Link to="/contact" className="header-tags"><li>Contact</li></Link>
      </ul>
    </div>
)
}
