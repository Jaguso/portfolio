import React, { Component } from 'react';
import './Home.css';
import Card from '../card/Card';
import projects from '../../data';

class Home extends Component {

  constructor(){
    super();
    this.state = {projects}
  }

  render() {
    return (
      <div className="main-container">
        <p>Proyectos:</p>
          
          {this.state.projects.map((item, i) => (
            <div key={i}>
              <Card
                link={item.link}
                desc={item.description}
              />
            </div>
          ))}
        
      </div>
    );
  }
}

export default Home;