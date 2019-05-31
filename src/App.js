import React from 'react';
import Cosmos from './frontend/cosmos.jsx'
import './App.css';

function App() {
  return (
    <div className="whole-app">
      <a className="game-header" target="_blank" href="https://github.com/GhostOfColin/Game_of_Life">Conway's Game of Life</a>
      <a className="author" target="_blank" href="https://www.linkedin.com/in/colin-reitman">by Colin Reitman</a>
      <div className="app">
        <Cosmos/>
      </div>
      <div className="instructions-div">
        <p className="instructions" > The Game of Life is a cellular automaton </p>
        <p className="instructions1" > Cells live and die based on how many neighbors they have </p>
        <p className="instructions2" > Click individual cells or Populate Cosmos to design a game </p>
        <p className="instructions3" > Dare to Dream to see The Game in action </p>
      </div>
    </div>
  );
}

export default App;
