import React, { Component } from 'react';
import Board from './Board'
import './App.css';


class App extends Component {
  render() {
    return (
      < Board />
      // bc just rendering one component, don't need to wrap it in a div
    )
  }
}

export default App;
