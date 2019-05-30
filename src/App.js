import React from 'react';
import Cosmos from './frontend/cosmos.jsx'
import './App.css';

function App() {
  return (
    <div>
      <h1 className="game-header">Conway's Game of Life</h1>
        <div className="app">
          <Cosmos/>
        </div>
      <p className="instructions" > The Game of Life is a cellular automaton </p>
      <p className="instructions1" > Cells live and die based on how many neighbors they have </p>
      <p className="instructions2" > Click individual cells or Populate Cosmos to design a game </p>
      <p className="instructions2" > Dare to Dream to see the Game in action </p>
    </div>
  );
}

export default App;
