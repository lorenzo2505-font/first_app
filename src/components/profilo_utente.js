

function ProfiloUtente (props) {

    const utente = props.utente

    const nome = props.utente.nome

    const cognome = props.utente.cognome

    const età = props.utente.età

    const professione = props.utente.professione

    const email = props.utente.email

    const mostraDettagli = () => {

        alert( `nome: ${nome}, cognome: ${cognome}, età: ${età}, professione: ${professione}, email: ${email}` )
    }
 
    

    return (

         

<div className="card h-100">
  <div className="card-header text-center" onClick={mostraDettagli}>

    <h1>presentazione utente</h1>

  </div>

  <div className="card-body text-center">

    
        
    <h5>nome e cognome: {nome},{cognome}</h5>

    <span className="badge">età: {età} anni</span>

    <p>professione: {professione}</p>

    <p>email: {email}</p>


        
        
        
    
  </div>
  <div className="card-footer text-center">

    Clicca Per vedere i dettagli

  </div>
</div>




    )


}

export default ProfiloUtente;

