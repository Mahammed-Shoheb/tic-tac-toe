import { useState } from 'react';
import Squares from './Squares';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const calculateWinner = (squares) => {
    const winingPattrens = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0.3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winingPattrens.length; i++) {
      const [a, b, c] = winingPattrens[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) return;
    squares[index] = isX ? 'X' : 'O';
    setSquares(squares);
    setIsX(!isX);
  };

  const createSquare = (index) => (
    <Squares
      square={squares[index]}
      handleClick={() => handleClick(index)}
      isX={isX}
    />
  );

  let state;
  let winner = calculateWinner(squares);
  if (!winner) {
    state = `Next player is ${isX ? 'X' : 'O'}`;
  } else {
    state = `Winner is ${winner}`;
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div className='board'>
      <div className='row'>
        {createSquare(0)}
        {createSquare(1)}
        {createSquare(2)}
      </div>
      <div className='row'>
        {createSquare(3)}
        {createSquare(4)}
        {createSquare(5)}
      </div>
      <div className='row'>
        {createSquare(6)}
        {createSquare(7)}
        {createSquare(8)}
      </div>
      <div className='board-footer'>
        <p className='status-text'>{state}</p>
        <button onClick={resetGame} className='btn restart-btn'>
          restart
        </button>
      </div>
    </div>
  );
};
export default Board;
