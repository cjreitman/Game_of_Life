
import React from 'react';

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.selectCell = this.selectCell.bind(this);
  }

  selectCell() {
    this.props.selectCell(this.props.row, this.props.col);
  }

  render() {
    return (
      <div 
        className= {"cell " + this.props.cellClass} 
        id={this.props.id}
        onClick={this.selectCell}
      >
      </div>
    )
  }

}

export default Cell;