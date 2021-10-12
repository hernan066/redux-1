import axios from "axios";

//const
const dataInicial = {
  pokemonSpecies: {
    loading: false,
    name: null,
    id: null,
    base_happiness: null,
    capture_rate: null,
    url: null,
    bio: null,
  },
};
//types
const OBTENER_SPECIES_EXITO = "OBTENER_SPECIES_EXITO";
const LOADING = "LOADING";
//reducer
export default function speciesReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case OBTENER_SPECIES_EXITO:
      return { ...state, pokemonSpecies: action.payload, loading: false };

    default:
      return state;
  }
}
//acciones

export const obtenerSpeciesAccion = (url) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });

  try {
    const rest = await axios.get(url);
    /*  console.log(rest.data) */
    dispatch({
      type: OBTENER_SPECIES_EXITO,
      payload: {
        name: rest.data.name,
        id: rest.data.id,
        base_happiness: rest.data.base_happiness,
        capture_rate: rest.data.capture_rate,
        url: rest.data.evolution_chain.url,
        bio: rest.data.flavor_text_entries[26].flavor_text,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
