import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
      <ul className="footer">
        <a className="footer-tags" target="_blank" href="https://github.com/andrewLcrist"><li>GitHub</li></a>
        <a className="footer-tags" target="_blank" href="https://twitter.com/andrewLcrist"><li>Twitter</li></a>
      </ul>
    </div>
)
}
