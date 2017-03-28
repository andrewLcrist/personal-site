import React from 'react';

export default class Header extends React.Component {
  constructor () {
    super ()
    this.state = {
    }
  }

  render () {
    return (
      <div className="header">
        <ul className="header-content">
          <li className="header-tags">HELLO</li>
          <li className="header-tags">INTRO</li>
          <li className="header-tags">PROJECTS</li>
          <li className="header-tags">ABOUT</li>
          <li className="header-tags">CONTACT</li>
        </ul>
      </div>
    )
  }
}
