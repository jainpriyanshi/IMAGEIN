import React from 'react';
import logo from './logo.svg';
import './App.css';
import Imageupload from './components/imageupload/Imageupload';
import Header from './components/header/Header';

function App() {
  return (
    <div >
      <header>
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Imageupload />
      </header>
    </div>
  );
}

export default App;
