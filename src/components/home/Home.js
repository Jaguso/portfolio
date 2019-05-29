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
        <h2>Proyectos</h2>
          
          {this.state.projects.map((item, i) => (
            <div key={i}>
              <Card
                link={item.link}
                desc={item.description}
                repo={item.repo}
              />
            </div>
          ))}
        
      </div>
    );
  }
}

export default Home;