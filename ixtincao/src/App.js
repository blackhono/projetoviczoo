import React from 'react';
import logo from './logo.svg';
import './App.css';

var timeA = 1
var timeB = 2
var nometimeA ="São Paulo"
var nometimeB = "Cruzeiro"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {`Time ${nometimeA} Fez ${timeA} gols contra o ${nometimeB} que fez ${timeB} gols `}
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
