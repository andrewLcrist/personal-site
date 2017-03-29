import React, { Component } from 'react';
import { SideNav } from './SideNav'
import Header from './Header'
import Projects from './Projects'
import {ComingSoon} from './ComingSoon'
import '../styles/App.css';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <ComingSoon />
      </div>
    );
  }
}
