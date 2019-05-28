import './css.css';
import React from 'react';
import Grid from './grid';
import Controls from './controls';

class Cosmos extends React.Component {

  constructor(props) {
    super(props);
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;
    this.state = {
      generation: 0,
      grid: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    };
    
    this.initialState = this.state.grid;
    this.selectCell = this.selectCell.bind(this);
    this.populateCosmos = this.populateCosmos.bind(this);
    this.clearCosmos = this.clearCosmos.bind(this);
    this.play = this.play.bind(this);
    this.dream = this.dream.bind(this);
    this.pause = this.pause.bind(this);
  }

  selectCell(row, col) {
    let gridCopy = arrayClone(this.state.grid);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      grid: gridCopy
    });
  }

  populateCosmos() {
    let gridCopy = arrayClone(this.initialState);
    for ( let i = 0; i < this.rows; i++ ) {
      for ( let x = 0; x < this.cols; x++ ) {
        if ( Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][x] = true;
        }
      }
    }
    this.setState({
      grid: gridCopy
    });
  }

  clearCosmos() {
    this.setState({
      grid: this.initialState,
      generation: 0
    });
  }

  play() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.dream, this.speed);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  dream() {
    let g = this.state.grid;
    let g2 = arrayClone(this.state.grid);

    for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;
		    if (i > 0) if (g[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		    if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({
      grid: g2,
      generation: this.state.generation + 1
    });
  }

  render() {
    return (
    <div className="cosmos"> 
      <Controls 
        populateCosmos={this.populateCosmos} 
        grid={this.state.grid} 
        initialState={this.initialState}
        clearCosmos={this.clearCosmos}
        play={this.play}
        pause={this.pause}
       />

      <Grid
        rows = {this.rows}
        cols = {this.cols}
        grid = {this.state.grid}
        selectCell = {this.selectCell}
      />
      <h3> Generations: {this.state.generation} </h3>
    </div>)
  }

}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr))
}

export default Cosmos;