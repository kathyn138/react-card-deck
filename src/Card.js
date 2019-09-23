import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>
      <img src={this.props.card}></img>
      </div>
    )
  }
}

export default Card; 