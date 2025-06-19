import React from "react";

const Tabellina = (numero) => {

    const nums = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10];

    if(isNaN(numero) == false && 0 <= numero <= 10){

        return <div> {
            
            
            nums.map((el) => {

                return <p>{el * numero}</p>
            })
            
            
            
            }

            

            
        </div>
    } else{

        return <div>{
            
            <p>non ha inserito un numero</p>
            
            } </div>
    }
}