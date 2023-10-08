import Board from './Board';

const App = () => {
  return (
    <main>
      <header className='header'>
        <div className='title'>
          <h1>tic tac toe</h1>
          <div className='title-underline'></div>
        </div>
      </header>
      <section className='section'>
        <Board />
      </section>
    </main>
  );
};
export default App;
