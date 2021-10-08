import React from 'react'

const CardPoke = ({id, image, name, type, _callback }) => {
    
    return (
        
        
        <div className="card-container">
            <div className="number"><small>#0{id}</small></div>
            <div id="foto">
                <img src={image} alt={name} className="mx-auto d-block"/>
            </div>
            
            
            <div className="detail-wrapper">
            <div className="card-title text-uppercase">
                <h4>{name}</h4>
                </div>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default CardPoke;