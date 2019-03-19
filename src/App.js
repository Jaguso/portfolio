import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div id="hero">
        <div id="hero-overlay">
          <Navbar/>
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
