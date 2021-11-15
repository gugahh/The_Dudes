import './App.css';
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <header className="App-header">
      <div class="container" class="fixed-top">
        <img src="imgs/logo_the_dudes_big.png" alt="logo the Dudes" />
      </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        <Button variant="primary">Bootstrap Button</Button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
