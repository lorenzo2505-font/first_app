function Card (title, imgURL, children) { // facciamo così oppure props, props.title, props.description

    

    //const description = "lorem ipsum"
    
    

    return (

        <div className = "rounden-md">

            <img src = {imgURL} alt= ""></img>

            <div className = "flex flex-col">

                <h2 className="text-2x1 text-white">{title}</h2>

                <p className="text-gray-500"> 
                    
                    {children} 

                    
                </p>

            </div>

        </div>
    

    )
}


export default Card;