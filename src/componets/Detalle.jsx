import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { unPokeDetalleAccion } from "../redux/pokeDucks";

const Detalle = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
       const fetchData=()=>{
            dispatch(unPokeDetalleAccion());
       }
       fetchData();
    }, [dispatch]);

    const pokemon = useSelector(store => store.pokemones.unPokemon);
    console.log(pokemon)
    
    return pokemon ?(
        <div>
           
            <div className="card text-center pb-3">
                <div className="d-flex justify-content-center">
                <img src={pokemon.foto} className="img-fluid"  alt="pokemon"/>
                </div>
                
               
                <div className="card-title text-uppercase">
                    {pokemon.nombre}
                </div>
                <p className="card-text">Altura: {pokemon.altura} | Peso: {pokemon.peso} </p>
            </div>
        </div>
    ) : null
}

export default Detalle
