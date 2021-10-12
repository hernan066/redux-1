import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerEvolutionAccion } from '../../redux/evolucionDucks';


const Evoluciones = () => {
    
     const url = useSelector((store) => store.species.pokemonSpecies.url);
    const data = useSelector((store) => store.evoluciones.pokemonEvolucion1);
    
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchData = () => {
        dispatch(obtenerEvolutionAccion(url));
       
      };
      fetchData();
    }, [dispatch, url]);  
    
  
    
    return (
        <div>
            <h3>Evoluciones</h3>
            <p>Evoluciona en :  {data.evo1} - {data.evo2} - {data.evo3}</p>
        </div>
    )
}

export default Evoluciones
