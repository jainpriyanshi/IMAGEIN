import React from 'react';
import logo from './logo.svg';
import './App.css';
import Imageupload from './components/imageupload/Imageupload';
import Header from './components/header/Header';
import Typist from './components/typist/Typist';

function App() {
  return (
    <div >
      <header>
        <Header />
        <p> </p>
        <Typist />
        <img src={logo} className="App-logo" alt="logo" />
        <Imageupload />
      </header>
    </div>
  );
}

export default App;
