import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Test</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      <div class="bg-white rounded-lg p-6">
        <img class="h-16 w-16 rounded-full mx-auto" src="avatar.jpg" alt='' />
        <div class="text-center">
          <h2 class="text-lg">Prawira Genestonlia</h2>
          <div class="text-purple-500">Founder</div>
          <div class="text-gray-600">praw0001@ntu.edu.sg</div>
        </div>
      </div>
    </>
  );
}

export default App;
