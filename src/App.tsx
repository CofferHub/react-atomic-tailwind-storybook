import React from 'react';
import logo from './assets/svg/blue.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="250px" />
        <h1>COFFER</h1>
        <p>
          We search to colaborate with knowledge to build great tools.
        </p>
        <a
          className="App-link"
          href="https://github.com/CofferHub/react-atomic-tailwind-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Give us a star
        </a>
      </header>
    </div>
  );
}

export default App;
