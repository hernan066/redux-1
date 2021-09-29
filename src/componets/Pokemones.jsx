import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { obtenerPokemonesAccion, siguientePokemonAccion } from '../redux/pokeDucks'

const Pokemones = () => {
    
    const dispatch = useDispatch();
    const pokemones = useSelector(store => store.pokemones.array);
    console.log(pokemones)
    
    return (
        <div>
            <h1>
                Lista de pokemones
            </h1>
           
            <hr />
            <button 
            onClick={()=> dispatch(obtenerPokemonesAccion())}>
                Obtener pokemones
            </button>
            <button 
            onClick={()=> dispatch(siguientePokemonAccion(20))}>
                Siguientes pokemones
            </button>
            <ul>
                {
                    pokemones.map(item=>(
                        <li key = {item.name} >{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
