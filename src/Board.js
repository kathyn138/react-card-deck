import React, { Component } from 'react';
import axios from "axios";
import Card from './Card';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckId: '',
      drawnCard: '',
      remaining: 52
    };

    this.drawCard = this.drawCard.bind(this);
  }

  async componentDidMount() {
    let idResponse = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    let deckId = idResponse.data.deck_id;
    this.setState({ deckId });
  }

  async drawCard() {
    let oneCard = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
    let drawnCard = oneCard.data.cards[0].image;
    let remaining = oneCard.data.remaining;
    this.setState({ drawnCard, remaining });
  }

  render() {

    return (
      <div>
        {this.state.remaining > 0 ? <button onClick={this.drawCard}>Draw a Card</button> : "No more remaining cards to shuffle!"} 
        {this.state.drawnCard ? < Card card={this.state.drawnCard}/> : null}
      </div>
    )
  }
}

export default Board;