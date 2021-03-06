import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null
    };
  }

  render() {
    return (
      <select>
        <option value="red">RED</option>
        <option value="green">GREEN</option>
        <option value="blue">BLUE</option>
        <option value="yellow">YELLOW</option>
        <option value="pink">PINK</option>
      </select>
    )
  }
}

function Square(props){

    var style = {
      color: props.value == 'X' ? 'pink' : 'green'
    }

    return (
      <button className="square" onClick={props.onClick} color = {props.myColor}>
        <span style={style}>{props.value}</span>
      </button>
    );
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(index){
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index]= this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner=calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <ColorSelector/>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
