import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';

import Clock from "./Clock";

import Persona from './persona';

import {anagrafica} from "./dati/dati";

import Card from "./components/card";

import {utenti} from "./utenti";

import ProfiloUtente from './components/profilo_utente';



function getDate(date){

  return date.toLocaleDateString()+" "+date.toLocaleTimeString();
}

function App(props) {

  let nome = "lorenzo";
  return (

  <>
    
    <Card title = "tokyo" img url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Spaccanapoli_da_s_Elmo_1050131.JPG/250px-Spaccanapoli_da_s_Elmo_1050131.JPG"></Card>
    

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

    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <ProfiloUtente utente={utenti[0]} />
      </div>
      <div className="col-md-4">
        <ProfiloUtente utente={utenti[1]} />
      </div>
      <div className="col-md-4">
        <ProfiloUtente utente={utenti[2]} />
      </div>
    </div>

    </div> 


     

  
  </>
  );
}

export default App;

