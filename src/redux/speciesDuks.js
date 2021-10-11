import axios from "axios";

//const
const dataInicial = {
    
    pokemonSpecies: []
};
//types
const  OBTENER_SPECIES_EXITO = "OBTENER_SPECIES_EXITO";
//reducer
export default function speciesReducer (state = dataInicial, action){
    switch (action.type) {
        case OBTENER_SPECIES_EXITO:
            
            return{...state, species: action.payload}
    
            default:
                return state;
    }
}
//acciones

export const obtenerSpeciesAccion = ()=> async(dispatch, getState)=>{
    
    
    if(localStorage.getItem('manolo')){
        dispatch({
            type: OBTENER_SPECIES_EXITO,
            payload: JSON.parse(localStorage.getItem('manolo'))
        })
    }else{
        try {
            const rest = await axios.get("https://pokeapi.co/api/v2/pokemon-species/1");
           /*  console.log(rest.data) */
            dispatch({
                type: OBTENER_SPECIES_EXITO, 
                payload:{
                    name: rest.data.name,
                    id: rest.data.id,
                    base_happiness: rest.data.base_happiness,
                    capture_rate: rest.data.capture_rate,
                    url :rest.data.evolution_chain.url,
                    bio: rest.data.flavor_text_entries[26].flavor_text
                } 
            })
            localStorage.setItem('manolo', JSON.stringify({
                name: rest.data.name,
                id: rest.data.id,
                base_happiness: rest.data.base_happiness,
                capture_rate: rest.data.capture_rate,
                url :rest.data.evolution_chain.url,
                bio: rest.data.flavor_text_entries[26].flavor_text
            } ))
        } catch (error) {
            console.log(error);
        }
    }
    
    
    
};