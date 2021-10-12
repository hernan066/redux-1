import React from "react";
import { useDispatch } from "react-redux";

import { buscarPokemonAccion } from "../../redux/pokeDucks";

const CardPoke = ({ id, image, name, type, _callback }) => {
  
  const dispatch = useDispatch();
  
  return (
    <div 
      className={`card-container animate__animated animate__fadeIn ${type}`}
      onClick={() => dispatch(buscarPokemonAccion(name)) }
      
    >
      <div className="number">
        <small>#0{id}</small>
      </div>
      <div id="foto">
        <img src={image} alt={name} className="mx-auto d-block" />
      </div>

      <div className="detail-wrapper">
        
        <small>Type: {type}</small>
        <div className="card-title text-uppercase">
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardPoke;
