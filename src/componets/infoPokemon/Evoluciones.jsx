import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerEvolutionAccion } from '../../redux/evolucionDucks';

const Evoluciones = () => {
    
    const data = useSelector((store) => store.species.species);
    const dataEvo = useSelector((store) => store.evoluciones);
    
    /* const dispatch = useDispatch();
    useEffect(() => {
      const fetchData = () => {
        dispatch(obtenerEvolutionAccion(data.url));
      };
      fetchData();
    }, [dispatch, data.url]); */
    
    /* console.log(data.url)
    console.log(dataEvo) */
    
    
    
    
    return (
        <div>
            <h3>Evoluciones</h3>
        </div>
    )
}

export default Evoluciones
