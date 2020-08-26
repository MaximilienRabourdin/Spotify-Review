import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="outerWrap"> 
      <div className="App">
        <div className="navBar">
          <div className="logo">Logo</div> 
          <ul> 
          <li>Home</li>
          <li>Search </li>
          <li>Votre librairie</li>
          </ul>
        </div>
      </div>

        <div className="music-controle"> Gestionnaire de musique </div> 

    </div> 
    


  );
}

export default App;
