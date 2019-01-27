import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link } from 'react-router-dom';
import HomePage from './views/home.js';
import Header from './components/Header.js';
import Navigation from './components/navigation.js';




class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/navigation" component={Navigation} />
      </div>
    );
  }
}

export default App;
