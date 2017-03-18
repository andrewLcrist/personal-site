import React from 'react';
var classNames = require('classnames');

export const SideNav = ({ animateIn, animations }) => {
  let toggleShow = animations ? 'show-menu' : 'hide-menu'
  let sideNavContainer = classNames('side-nav', toggleShow)
    return (
      <div className={sideNavContainer}>
        <p className="test">Andrew Crist</p>

        <button onClick={() => animateIn()}>Close</button>
        <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/portfolio-2cae9.appspot.com/o/andrew_crist_resume.pdf?alt=media&token=693af39b-7ba3-40d7-9fe0-01faee4a14f3">Andrew's Resume</a>
      </div>
    );
}
