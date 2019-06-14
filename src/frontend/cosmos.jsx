import './css.css';
import soundfile from './Tarzan Boy by Baltimora LYRICS HQ Extended Version.mp3';
import React from 'react';
import Grid from './grid';
import Controls from './controls';

class Cosmos extends React.Component {

  constructor(props) {
    super(props);
    this.speed = 112;
    this.rows = 45;
    this.cols = 85;
    this.state = {
      generation: 0,
      grid: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
      dreaming: false,
      musicPlaying: true
    };
    this.initialState = this.state.grid;
    this.selectCell = this.selectCell.bind(this);
    this.populateCosmos = this.populateCosmos.bind(this);
    this.clearCosmos = this.clearCosmos.bind(this);
    this.play = this.play.bind(this);
    this.autoPlayMusic = this.autoPlayMusic.bind(this);
    this.dream = this.dream.bind(this);
    this.pause = this.pause.bind(this);
    this.step = this.step.bind(this);
    this.switchMusic = this.switchMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);
    this.audio = new Audio(soundfile);
    
  }

  autoPlayMusic() {
    if (this.state.musicPlaying) {
      this.audio.play();
    }
  }

  pauseMusic() {
    this.audio.pause();
  }

  switchMusic() {
    if (this.state.musicPlaying) {
      this.audio.pause();
      this.setState({
        musicPlaying: false
      });
    } else {
      this.setState({
        musicPlaying: true
      });
      this.audio.play();
    }
  }

  selectCell(row, col) {
    let gridCopy = arrayClone(this.state.grid);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      grid: gridCopy
    });
    
  }

  populateCosmos() {
    this.pause();
    this.clearCosmos();
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
    clearInterval(this.intervalId);
    this.setState({
      grid: this.initialState,
      generation: 0,
      dreaming: false
    });
  }

  play() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.dream, this.speed);
    this.setState({
      dreaming: true
    });
  }

  pause() {
    clearInterval(this.intervalId);
    this.setState({
      dreaming: false
    });
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

  step() {
    let g = this.state.grid;
    let g2 = arrayClone(this.state.grid);

    for (let i = 0; i < 45; i++) {
		  for (let j = 0; j < 85; j++) {
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
      <div>
        <div className="header-div">
          <h3 className="generations-header"> Generations: {this.state.generation} </h3>
          <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" id="more-info" className="more-info"> The Game of Life was the basis for several computational discoveries 
          <br/>
          There exist structures that are - as of yet - undiscovered
          <br/>
          Click to visit the Wikipedia page and learn more about it
          </a>
        </div>
        <Grid
          rows = {this.rows}
          cols = {this.cols}
          grid = {this.state.grid}
          selectCell = {this.selectCell}
        />

        <Controls 
          populateCosmos={this.populateCosmos} 
          grid={this.state.grid} 
          initialState={this.initialState}
          clearCosmos={this.clearCosmos}
          step={this.step}
          play={this.play}
          switchMusic={this.switchMusic}
          pause={this.pause}
          dreaming={this.state.dreaming}
          autoPlayMusic={this.autoPlayMusic}
          pauseMusic={this.pauseMusic}
        />
      </div>
    </div>)
  }

}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr))
}

export default Cosmos;