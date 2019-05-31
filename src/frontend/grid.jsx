import './css.css'
import React from 'react';
import Cell from './cell';

class Grid extends React.Component {

  populator() {
    let rowsArr = [];
    let cellClass = "";
    for ( let i = 0; i < this.props.rows; i++ ) {
      for ( let x = 0; x < this.props.cols; x++ ) {
        let cellId = i + "_" + x;

        if ( this.props.grid[i][x] ) {
          cellClass = "alive";
        } else {
          cellClass = "dead";
        }
        rowsArr.push(
        <Cell
          cellClass={cellClass}
          key={cellId}
          row={i}
          col={x}
          selectCell={this.props.selectCell}
        />)
      }
    }
    return rowsArr;
  }

  render() {

    let popGrid = this.populator();
    const width = this.props.cols * 11;

    return (
    <div className="grid" style={{width: width}}>
      {popGrid}
    </div>)
  }
}

export default Grid;