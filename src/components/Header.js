import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <ul className="header-content">
        <Link title="Hello" to="/" className="header-tags"><li>HELLO</li></Link>
        <Link title="Projects" to="/projects" className="header-tags"><li>Projects</li></Link>
        <Link title="Contact" to="/contact" className="header-tags"><li>Contact</li></Link>
      </ul>
    </div>
)
}
