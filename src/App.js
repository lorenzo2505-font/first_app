import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';

import Clock from "./Clock";

import Persona from './persona';

import {anagrafica} from "./dati/dati";



function getDate(date){

  return date.toLocaleDateString()+" "+date.toLocaleTimeString();
}

function App() {

  let nome = "lorenzo";
  return (
    <div className="App">

      <h1>super applicazione di {nome} </h1>

      <Componente1>pippo</Componente1>

      {
        new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString() 
      }

      <h2>
        <h3><Clock timezone = "2" country = "ITALY"></Clock></h3>
      </h2>

      <Persona></Persona>
    
    </div>
  );
}

export default App;
//
