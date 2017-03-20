import React, { Component } from 'react';
import { SideNav } from './SideNav'
import Header from './Header'
import Projects from './Projects'
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animations: false,
      menu: false
    }
  }

  animateOut() {
    this.setState({ animations: !this.state.animations, menu: !this.state.menu })
  }

  animateIn() {
    this.setState({ animations: !this.state.animations, menu: !this.state.menu })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={() => this.animateOut()}>Menu</button>
        <Projects />
        <SideNav
          animateIn={this.animateIn.bind(this)}
          animations={this.state.animations}
          menu={this.state.menu}
        />
      </div>
    );
  }
}

export default App;
