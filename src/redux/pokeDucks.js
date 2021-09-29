//Metodo Ducks para redux (todo en un archivo).
//https://github.com/erikras/ducks-modular-redux#the-proposal
//En este ej, la accion consume la api, el reducer la acepta y la envia a la constante, y de la constante(stade) pasa a cualquier modulo.
import axios from "axios";

//constantes
const dataInicial = {
    array : []
}

//constantes-types
const  OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"

//reducer
export default function pokeReducer (state = dataInicial, action){
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return{...state, array:action.payload}
        default:
            return state;
    }
}
//acciones
export const obtenerPokemonesAccion = ( )=> async(dispatch, getState)=>{
    try {
        const rest = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
        dispatch({
            type: OBTENER_POKEMONES_EXITO, 
            payload: rest.data.results
        })
        //rest.data.results
    } catch (error) {
        console.log(error)
    }
}