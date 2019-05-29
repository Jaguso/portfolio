import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return(
      <div className="card-container">
        <div>
          Link a proyecto: <a href={this.props.link} target="_blank">{this.props.link}</a>
        </div>
        <div>
          Repositorio en github: <a href={this.props.repo} target="_blank">{this.props.repo}</a>
        </div>
        <div className="description">
          <p>Descripción: {this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default Card;