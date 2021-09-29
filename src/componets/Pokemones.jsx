import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  anteriorPokemonAccion,
  obtenerPokemonesAccion,
  siguientePokemonAccion,
} from "../redux/pokeDucks";

const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  return (
    <div>
      <h1>Lista de pokemones</h1>

      <hr />
      {pokemones.length === 0 && (
        <button onClick={() => dispatch(obtenerPokemonesAccion())}>
          Obtener pokemones
        </button>
      )}

      {next && (
        <button onClick={() => dispatch(siguientePokemonAccion())}>
          Siguiente
        </button>
      )}
      {previous && (
        <button onClick={() => dispatch(anteriorPokemonAccion())}>
          Anterior
        </button>
      )}

      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
