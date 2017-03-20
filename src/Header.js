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
        <div className="header-content">
          <p className="header-text">My name is Andrew Crist and I'm a front-end developer.</p>
        </div>
      </div>
    )
  }
}
