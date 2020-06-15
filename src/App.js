import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}></Route>
        <Redirect from="/" to="/patients"></Redirect>
      </Router>
    );
  }
}
