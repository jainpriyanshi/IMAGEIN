import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import img from './images/bg2.jpg';
import './App.css';
import Inpainting from './components/inpainting/Inpainting';
import Header from './components/header/Header';
import Typist from './components/typist/Typist';
import Grayscale from './components/grayscale/Grayscale'
import Blur from './components/blur/Blur'
function App() {
  return (
    <div class="App">
      <header class="App-header">
         <Header/>
         
         <Router>
           <Route
           exact
           path='/'
           render={()=>(
             <div>
               <img class="center" src={img}/>
               <Typist />
             </div>
           )}
           />
           <Route
           exact
           path='/inpainting'
           render={()=>(
             <Inpainting />
           )}
           />
            <Route
           exact
           path='/grayscale'
           render={()=>(
             <Grayscale />
           )}
           />
         
         <Route
           exact
           path='/blur'
           render={()=>(
             <Blur />
           )}
           />
         </Router>
      </header>
    </div>
  );
}

export default App;
