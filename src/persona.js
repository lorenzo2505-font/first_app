import React from "react"






const Persona = () => {



    const persona = {

        nome: "lorenzo",

        cognome: "acomanni",

        età: 20,

        genere: "maschio",

        interessi: ["videogiochi", "film", "serie", "fumetti", "tennis", "calcio", "sviluppo software"]

    

    
    }

    return (


        <div className = "container border p-3 ">

            <p><strong>Nome: {persona["nome"]}</strong></p>

            <p><strong>Cognome: {persona["cognome"]}</strong></p>

            <p><strong>età: {persona["età"]}</strong></p>

            <p><strong>genere: {persona["genere"]}</strong></p>

            <p><strong>interessi: {persona["interessi"].join(", ")} </strong></p>
        </div>
    )


}


export default Persona