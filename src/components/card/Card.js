import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return(
      <div className="card-container">
        <a>{this.props.link}</a>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Card;