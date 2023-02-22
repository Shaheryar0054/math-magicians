import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <div>
        <input value={0} className="display" />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
