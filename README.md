# [Conway's Game of Life](https://colinsgameoflife.herokuapp.com/)

Conway's game of life is a cellular automaton developed in the 1970s by John Conways as a simulator for the behavior of population dynamics and cellular generations.

# Technologies

* [React.js](https://reactjs.org)

# Images

![image](https://user-images.githubusercontent.com/46357004/59389991-f8e83600-8d3d-11e9-9d32-542ff3f225ec.png)
The game of life in a pre-loaded state, where the image of the game board fades into view.


![image](https://user-images.githubusercontent.com/46357004/59389945-cb9b8800-8d3d-11e9-9e8f-b296c4e03ec5.png)
A partially loaded game board that has not yet been populated with cells.


![image](https://user-images.githubusercontent.com/46357004/59389968-dce49480-8d3d-11e9-8981-8967ac24eb83.png)
A full-loaded game board that is ready to begin the simulation.

# Code Highlights

```js
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
  
   autoPlayMusic() {
    if (this.state.musicPlaying) {
      this.audio.play();
    }
  }

  switchMusic() {
    if (this.state.musicPlaying) {
      this.audio.pause();
      this.setState({
        musicPlaying: false
      });
      console.log(this.musicPlaying);
    } else {
      this.setState({
        musicPlaying: true
      });
      this.audio.play();
    }
  }
  
```


## Authors

* **Colin Reitman**
