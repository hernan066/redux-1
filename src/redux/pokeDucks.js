//Metodo Ducks para redux (todo en un archivo).
//https://github.com/erikras/ducks-modular-redux#the-proposal
//En este ej, la accion consume la api, el reducer la acepta y la envia a la constante, y de la constante(stade) pasa a cualquier modulo.
import axios from "axios";

//constantes
const dataInicial = {
    array : [],
    offset : 0
}

//constantes-types
const  OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";

//reducer
export default function pokeReducer (state = dataInicial, action){
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return{...state, array:action.payload}
        
        case SIGUIENTE_POKEMONES_EXITO:
            return{...state, array:action.payload.array, offset: action.payload.offset}
        default:
            return state;
    }
}
//acciones
export const obtenerPokemonesAccion = ( )=> async(dispatch, getState)=>{
    
    const offset = getState().pokemones.offset
    //desctrucurado const {offset} = getState().pokemones

    
    try {
        const rest = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO, 
            payload: rest.data.results
        })
        //rest.data.results
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAccion = (numero)=> async(dispatch, getState)=>{
    
    const offset = getState().pokemones.offset
    const siguiente = offset + numero
    
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type : SIGUIENTE_POKEMONES_EXITO,
            payload:{
                array : res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}