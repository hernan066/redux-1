import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import { buscarPokemonAccion } from "../redux/pokeDucks";

import CardPoke from "./CardPoke";




const Lista = () => {
    
    const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
   const dispatch = useDispatch();

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        /* await allPokemons.sort((a, b) => a.id - b.id) */
      })
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  
  
   return (
    <div className="app-contaner">
    <h3>Pokemons</h3>

    <hr />

    <div className="pokemon-container" >
    <NavLink to="/detalle" >
      
      <div className="all-container ">
      
        
        {allPokemons.map( (pokemonStats, index) => 
         <div >
            <CardPoke
            key={index}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
          />
         </div> )}
        
      </div>
    </NavLink>
        <button className="btn btn-danger mt-3 lm" onClick={() => getAllPokemons()}>Atrapar mas</button>
    </div>
  </div>
    )
}

export default Lista
