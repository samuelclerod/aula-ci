import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu código base para projeto de Continuous Integration and Continuous Delivery
        </p>
        <a
          className="App-link"
          href="https://github.com/features/actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GitHub Actions
        </a>
      </header>
    </div>
  );
}

export default App;
