import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
