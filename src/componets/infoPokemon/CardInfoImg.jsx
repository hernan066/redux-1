import React from 'react'
import { useSelector } from 'react-redux';

const CardInfoImg = () => {
    
    const data = useSelector((store) => store.pokemones.buscarPokemon);
    
    
    return (
        <div className={`card-container animate__animated animate__fadeIn ${data.tipo0}`}>
      
      <div id="foto">
        <img src={data.foto1} alt={data.nombre} className="mx-auto d-block" />
      </div>

      <div className="detail-wrapper">
        
        <small>Type: {data.tipo0}</small>
        <div className="card-title text-uppercase">
          <h4>{data.nombre}</h4>
        </div>
      </div>
    </div>
    )
}

export default CardInfoImg
