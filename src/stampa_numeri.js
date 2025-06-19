import React from 'react'

const Stampanumeri = () => {
    const numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>{
        
        numeri.map((el)=>{

            return <p>{el}</p>

        })}</div>
  )
}

export default Stampanumeri