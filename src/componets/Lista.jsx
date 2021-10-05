import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  anteriorPokemonAccion,
  obtenerPokemonesAccion,
  siguientePokemonAccion,
  unPokeDetalleAccion,
} from "../redux/pokeDucks";

const Lista = () => {
    
    const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);
    
    return (
        <div className="contenedor">
             <div className="lista-poke">
            
            <h3>Lista de pokemones</h3>

            <hr />
            
            <div className="d-flex justify-content-between">

                    {pokemones.length === 0 && (
                        <button className="btn btn-dark" onClick={() => dispatch(obtenerPokemonesAccion())}>
                        Obtener pokemones
                        </button>
                    )}

                    {next && (
                        <button className="btn btn-dark" onClick={() => dispatch(siguientePokemonAccion())}>
                        Siguiente
                        </button>
                    )}
                    {previous && (
                        <button className="btn btn-dark" onClick={() => dispatch(anteriorPokemonAccion())}>
                        Anterior
                        </button>
                    )}
            </div>
            
        <div className="card-poke">
            
                {pokemones.map((item) => (
                <div className="card"  key={item.name}> 
                    <img src="#" alt="Pokemon" />
                    <div className="card-body">
                        <h5 class="card-title text-uppercase">{item.name}</h5>
                        <p class="card-text">{item.url}</p>
                        <button 
                            className="btn btn-dark btn-sm float-end"
                            onClick={()=> dispatch(unPokeDetalleAccion(item.url))}
                        >Info
                        </button>
                    </div>
                   
                </div>
                ))}
           
        </div>
            
        </div> 
        </div>
    )
}

export default Lista
