import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return(
      <div className="card-container">
        <a href={this.props.link} target="_blank">{this.props.link}</a>
        <a href={this.props.repo} target="_blank">{this.props.repo}</a>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Card;