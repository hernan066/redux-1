//Metodo Ducks para redux (todo en un archivo).
//https://github.com/erikras/ducks-modular-redux#the-proposal
//En este ej, la accion consume la api, el reducer la acepta y la envia a la constante, y de la constante(stade) pasa a cualquier modulo.
import axios from "axios";

//constantes
const dataInicial = {
    count:0,
    next:null,
    previous:null,
    results: [],
    


}

//constantes-types
const  OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const  OBTENER_10_POKEMONES_EXITO = "OBTENER_10_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
const ANTERIOR_POKEMONES_EXITO = "ANTERIOR_POKEMONES_EXITO";
const POKE_INFO_EXITO = "POKE_INFO_EXITO";
const POKE_BUSCAR_EXITO="POKE_BUSCAR_EXITO";

//reducer
export default function pokeReducer (state = dataInicial, action){
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return{...state, ...action.payload}
        case OBTENER_10_POKEMONES_EXITO:
            return{...state, ...action.payload}
        
        case SIGUIENTE_POKEMONES_EXITO:
            return{...state, ...action.payload}
        case ANTERIOR_POKEMONES_EXITO:
            return{...state, ...action.payload}
        case POKE_INFO_EXITO:
            return{...state, unPokemon: action.payload}
        case POKE_BUSCAR_EXITO:
                return{...state, unPokemon: action.payload}
        default:
            return state;
    }
}
//acciones
export const obtenerPokemonesAccion = ( )=> async(dispatch, getState)=>{
    
     if(localStorage.getItem('offset=0')){
        console.log('datos guardados')
        dispatch({
            type: OBTENER_POKEMONES_EXITO, 
            payload:JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    } 

    
    try {
        const rest = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
        console.log(rest.data)
    
        dispatch({
            type: OBTENER_POKEMONES_EXITO, 
            payload: rest.data
        })
        localStorage.setItem('offset=0', JSON.stringify(rest.data))
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAccion = ()=> async(dispatch, getState)=>{
    
    
    const {next} = getState().pokemones

    if(localStorage.getItem(next)){
        console.log('datos guardados')
        dispatch({
            type: OBTENER_POKEMONES_EXITO, 
            payload:JSON.parse(localStorage.getItem(next))
        })
        return
    } 
    
    try {
        const res = await axios.get(next)
        dispatch({
            type : SIGUIENTE_POKEMONES_EXITO,
            payload:res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const anteriorPokemonAccion = ()=> async(dispatch, getState)=>{
    
    
    const {previous} = getState().pokemones

    if(localStorage.getItem(previous)){
        console.log('datos guardados')
        dispatch({
            type: OBTENER_POKEMONES_EXITO, 
            payload:JSON.parse(localStorage.getItem(previous))
        })
        return
    } 
    
    try {
        const res = await axios.get(previous)
        dispatch({
            type : ANTERIOR_POKEMONES_EXITO,
            payload:res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const unPokeDetalleAccion=(url="https://pokeapi.co/api/v2/pokemon/1/")=>async(dispatch, getState)=>{
    
  
    
    
    try {
        const res = await axios.get(url);
       
        dispatch({
            type: POKE_INFO_EXITO,
            payload:{
                nombre: res.data.name,
                peso: res.data.weight,
                altura: res.data.height,
                hp: res.data.stats[0].base_stat, 
                ataque: res.data.stats[1].base_stat, 
                defensa: res.data.stats[2].base_stat, 
                ataqueEspecial: res.data.stats[3].base_stat, 
                defensaEspecial: res.data.stats[4].base_stat, 
                velocidad: res.data.stats[5].base_stat, 
                tipo0: res.data.types[0].type.name, 
                //tipo1: res.data.types[1].type.name, 
                foto1: res.data.sprites.other.dream_world.front_default,
                foto: res.data.sprites.front_default
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const buscarPokemonAccion=(buscar)=>async(dispatch, getState)=>{
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${buscar}`);
        dispatch({
            type: POKE_BUSCAR_EXITO,
            payload:{
                nombre: res.data.name,
                peso: res.data.weight,
                altura: res.data.height,
                hp: res.data.stats[0].base_stat, 
                ataque: res.data.stats[1].base_stat, 
                defensa: res.data.stats[2].base_stat, 
                ataqueEspecial: res.data.stats[3].base_stat, 
                defensaEspecial: res.data.stats[4].base_stat, 
                velocidad: res.data.stats[5].base_stat, 
                tipo0: res.data.types[0].type.name, 
                //tipo1: res.data.types[1].type.name, 
                foto1: res.data.sprites.other.dream_world.front_default,
                foto: res.data.sprites.front_default
            }
        })
    } catch (error) {
        console.log(error)
    }
}

/////////////////////////////////////////////////////////////////////////////
////////////////////////////codigo prueba////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

