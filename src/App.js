import React, { Component } from 'react';
import { SideNav } from './SideNav'
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animations: false
    }
  }

  animateOut() {
    this.setState({ animations: !this.state.animations })
  }

  animateIn() {
    this.setState({ animations: !this.state.animations })
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          App
        </p>
        <button onClick={() => this.animateOut()}>Button</button>
        <SideNav
          animateIn={this.animateIn.bind(this)}
          animations={this.state.animations}
        />
      </div>
    );
  }
}

export default App;
