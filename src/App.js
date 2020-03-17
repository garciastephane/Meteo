import React from 'react';
import Recherche from './components/Recherche';


function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Chercher des images</p>
        <Recherche 
        message="Chercher"
        />
        
        </div>
      <h1>Coronavirus</h1>
    </div>
  );
}

export default App;
