import axios from "axios";

//const
const dataInicial = {
    
    pokemonEvoluciones: []
}
//types
const  OBTENER_EVOLUTIONS_EXITO = "OBTENER_EVOLUTIONS_EXITO";
//reducer
export default function evolutionReducer (state = dataInicial, action){
    switch (action.type) {
        case OBTENER_EVOLUTIONS_EXITO:
            
            return{...state, ...action.payload}
    
            default:
                return state;
    }
}
//acciones

export const obtenerEvolutionAccion = (url)=> async(dispatch, getState)=>{
    try {
        const rest = await axios.get(url);
       /*  console.log(rest.data) */
        dispatch({
            type: OBTENER_EVOLUTIONS_EXITO, 
            payload: rest.data
        })

    } catch (error) {
        console.log(error);
    }
};