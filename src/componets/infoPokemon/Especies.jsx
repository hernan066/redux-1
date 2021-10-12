import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerSpeciesAccion } from '../../redux/speciesDuks';
import Evoluciones from './Evoluciones';

const Especies = () => {
    
  const urlSpecies = useSelector((store) => store.pokemones.buscarPokemon.species);
  
  
  const dispatch = useDispatch();
    useEffect(() => {
      const fetchData = () => {
        dispatch(obtenerSpeciesAccion(urlSpecies));
      };
      fetchData();
    }, [dispatch, urlSpecies]);
  
  

    const data = useSelector((store) => store.species.pokemonSpecies);
    
   
  
    
    return (
      <div>
           <h3>Data y evoluciones</h3>
          <p>Nombre: {data.name}</p>
          <p>ID: {data.id}</p>
          <p>Base happiness: {data.base_happiness}</p>
          <p>Capture rate: {data.capture_rate}</p>
          <p>Bio: {data.bio}</p> 
          <Evoluciones />   
      </div>
    )
    
}

export default Especies


