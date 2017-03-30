import React, { Component } from 'react'
import { Header } from './Header'
import { Home } from './Home'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
            <Header />

            <Route exact path="/home" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}
