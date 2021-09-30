import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  anteriorPokemonAccion,
  obtenerPokemonesAccion,
  siguientePokemonAccion,
  unPokeDetalleAccion,
} from "../redux/pokeDucks";
import Detalle from "./Detalle";

const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  return (
    <div className="row">

        <div className="col-md-6">
           
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
            

            <ul className="list-group mt-3 mb-3">
                {pokemones.map((item) => (
                <li className="list-group-item text-uppercase" key={item.name}>{item.name}
                    <button 
                        className="btn btn-dark btn-sm float-end"
                        onClick={()=> dispatch(unPokeDetalleAccion(item.url))}
                    >Info</button>
                </li>
                ))}
            </ul>
        </div> 
         <div className="col-md-6">
                    <h3>Detalle</h3>

                    <hr />
                    <Detalle />
        </div>           
    </div>
  );
};

export default Pokemones;
