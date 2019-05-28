
import React from 'react';

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.populateCosmos = this.populateCosmos.bind(this);
  }

  populateCosmos() {
    this.props.populateCosmos();
  }

  clearCosmos() {
    this.props.clearCosmos();
  }

  play() {
    this.props.play();
  }

  pause() {
    this.props.pause();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.populateCosmos()}>Populate Cosmos</button>
        <button onClick={() => this.clearCosmos()}>Clear Cosmos</button>
        <button onClick={() => this.play()}>Dare to Dream</button>
        <button onClick={() => this.pause()}>Pause the Dream</button>
      </div>
      )
  }

}

export default Controls;