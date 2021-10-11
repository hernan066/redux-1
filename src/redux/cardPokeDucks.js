import axios from "axios";

//const
const dataInicial = {
    
    pokemonCard: []
}
//types
const  OBTENER_DETALLE_EXITO = "OBTENER_DETALLE_EXITO";
//reducer
export default function cardPokeReducer (state = dataInicial, action){
    switch (action.type) {
        case OBTENER_DETALLE_EXITO:
            
            return{...state, ...action.payload}
    
            default:
                return state;
    }
}
//acciones

export const obtenerCardPokeAccion = (url)=> async(dispatch, getState)=>{
    try {
        const rest = await axios.get(url);
       /*  console.log(rest.data) */
        dispatch({
            type: OBTENER_DETALLE_EXITO, 
            payload: rest.data
        })

    } catch (error) {
        console.log(error);
    }
};