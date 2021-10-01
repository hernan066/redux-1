import React, { useState } from "react";
import { buscarPokemonAccion } from "../redux/pokeDucks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Detalle from "./Detalle";

function Buscar() {
    
    const dispatch = useDispatch();
    const pokemon = useSelector((store) => store.pokemones.unPokemon);
    console.log(pokemon)
  
    
    const [buscar, setBuscar] = useState("");

  const enviarDatos = (e) => {
    e.preventDefault();
    

    if (!buscar.trim()) {
      console.log("busqueda vacia");
      return;
    }
    console.log(buscar);
    
    e.target.reset()
    setBuscar("");
  };

  return (
    <div id="buscar" className="container">
      <h2>Buscar pokemones</h2>
      <div>
        <form onSubmit={enviarDatos}>
          <input 
            type="text" 
            className="form-control mb-2" 
            placeholder="Ingrese nombre o ID"
            onChange={(e) => setBuscar(e.target.value)}
            />
          <button
            className="btn btn-danger  mb-2"
            type="submit"
            onClick={() => dispatch(buscarPokemonAccion(buscar))}
          >
            Buscar
          </button>
        </form>

        <Detalle />
      </div>
    </div>
  );
}

export default Buscar;
