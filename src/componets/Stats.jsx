import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { unPokeDetalleAccion } from "../redux/pokeDucks";

const Stats = ({ url }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(unPokeDetalleAccion());
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector((store) => store.pokemones.buscarPokemon);
  /*  console.log(pokemon); */

  return pokemon ? (
    <div>
      <div className="card-title text-uppercase">
        <h4>{pokemon.nombre}</h4>
      </div>
      <p className="card-text">Hp: {pokemon.hp} </p>
      <p className="card-text">Ataque: {pokemon.ataque} </p>
      <p className="card-text">Defensa: {pokemon.defensa} </p>
      <p className="card-text">Ataque Especial: {pokemon.ataqueEspecial} </p>
      <p className="card-text">Defensa Especial: {pokemon.defensaEspecial} </p>
      <p className="card-text">Velocidad: {pokemon.velocidad} </p>
      <p className="card-text">Tipo: {pokemon.tipo0} </p>
      <p className="card-text">
        Altura: {pokemon.altura} | Peso: {pokemon.peso}{" "}
      </p>
    </div>
  ) : null;
};

export default Stats;
