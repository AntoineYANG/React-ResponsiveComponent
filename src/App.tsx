import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyResponsiveCompo } from "./demo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a demo.
        </p>
        <MyResponsiveCompo />
      </header>
    </div>
  );
}

export default App;
