import React from 'react'


const Clock = () => {

    const date = new Date();

    return (

        <h3> in {country} sono le {date.toLocaleDateString()+" "+date.toLocaleTimeString()}</h3>
    )
}

export default Clock

//