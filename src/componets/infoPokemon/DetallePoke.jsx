import React, { useEffect } from "react";
import Especies from "./Especies";
import Stats from "../Stats";
import { NavLink } from "react-router-dom";
import CardInfoImg from "./CardInfoImg";
import { useSelector } from "react-redux";


const DetallePoke = () => {
  
  const loading = useSelector((store) => store.species.pokemonSpecies.loading);  
  ///////////////////////////////////////////
  
  //Consumir una api dentro de otra genera errores terminar esta parte con una base de datos
  
  ///////////////////////////////////////////////////////
  
  
  
  
  
  
  return loading === false ? (
    <div>
      <h1>Detalle pokemon</h1>
      <hr />
      
      <div className="container">

          <NavLink to="/lista">
            <button className="btn btn-dark">Volver</button>
          </NavLink>
      </div>
       <div>

       <CardInfoImg /> 
       </div>
      <div>
      <Stats  />

      </div>
      
      {/* <Especies /> */}
     
     
     
    </div>
  ) : (
    <div className="loading">
      <div className="loading_full_height">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetallePoke;
