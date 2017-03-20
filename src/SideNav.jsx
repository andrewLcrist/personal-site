import React from 'react';
var classNames = require('classnames');

export const SideNav = ({ animateIn, animations, menu }) => {
  let toggleMenu = animations ? 'show-menu' : 'hide-menu'
  let sideNavContainer = classNames(toggleMenu)
  let toggleBackground = menu ? 'side-nav' : 'no-side-nav'
  let showMenu = classNames(toggleBackground)
    return (
      <div>
        <div className={sideNavContainer}>
          <button onClick={() => animateIn()}>Close</button>
          <p ><a>About</a></p>
          <p>
            <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/portfolio-2cae9.appspot.com/o/andrew_crist_resume.pdf?alt=media&token=693af39b-7ba3-40d7-9fe0-01faee4a14f3">Andrew's Resume</a>
          </p>
          <p>Projects</p>
        </div>
        <div className={showMenu} onClick={() => animateIn()}></div>
      </div>
    );
}
