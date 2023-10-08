const Squares = ({ square, handleClick, isX }) => {
  return (
    <div
      onClick={handleClick}
      className='square'
      style={{ color: `${square === 'X' ? 'red' : 'green'}` }}
    >
      {square}
    </div>
  );
};
export default Squares;
