import React from 'react';
import Cosmos from './frontend/cosmos.jsx'
import './App.css';

function App() {
  return (
    <div>
      
      <div className="app">
        <h1 className="game-header">Conway's Game of Life</h1>
        <Cosmos/>
      </div>
    </div>
  );
}

export default App;
