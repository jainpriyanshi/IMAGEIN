import React from 'react';
import logo from './logo.svg';
import './App.css';
import Imageupload from './components/imageupload/Imageupload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Imageupload />
      </header>
    </div>
  );
}

export default App;
