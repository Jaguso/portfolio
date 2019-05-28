import React, { Component } from 'react';
import Card from '../card/Card';

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <p>These are some of my projects:</p>
        <div>
          <Card/>
        </div>

      </div>
    );
  }
}

export default Home;