import logo from './logo.svg';
import './App.css';
import React from 'react';
import MetaMaskConnector from './MetaMaskConnector';

function App() {
  return (
    <div>
      <h1>MetaMask Connection Example</h1>
      <MetaMaskConnector />
    </div>
  );
}

export default App;
