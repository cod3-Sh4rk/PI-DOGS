import React from "react";


export default function Card({name, image_url, temperament}){
    return (
        <div>
        <h3>{name}</h3>
        <h5>{temperament}</h5>
        <img src={image_url} alt='sin imagen'  width="200px" height="250px" />
    
        </div>

    )
    
}

