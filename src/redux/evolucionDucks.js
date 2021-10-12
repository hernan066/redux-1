import axios from "axios";

//const
const dataInicial = {
  pokemonEvolucion1: {
    evo1: null,
    evo2: null,
    evo3: null,
  },
};
//types
const OBTENER_EVOLUTION_1_EXITO = "OBTENER_EVOLUTION_1_EXITO";
const RESET_EVOLUTION_EXITO = "RESET_EVOLUTION_EXITO";

//reducer
export default function evolutionReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_EVOLUTION_1_EXITO:
      return { ...state, pokemonEvolucion1: action.payload };
    case RESET_EVOLUTION_EXITO:
      return { ...state, pokemonEvolucion1: action.payload };

    default:
      return state;
  }
}
//acciones

export const obtenerEvolutionAccion = (url) => async (dispatch, getState) => {
  try {
    const rest = await axios.get(url);
    /*  console.log(rest.data) */

    if (!rest.data.chain.evolves_to[0].species.name) {
      return dispatch({
        type: OBTENER_EVOLUTION_1_EXITO,
        payload: {
          evo1: rest.data.chain.species.name,
          evo2: null,
          evo3: null,
        },
      });
    } else {
      if (!rest.data.chain.evolves_to[0].evolves_to[0].species.name) {
        return dispatch({
          type: OBTENER_EVOLUTION_1_EXITO,
          payload: {
            evo1: rest.data.chain.species.name,
            evo2: rest.data.chain.evolves_to[0].species.name,
            evo3: null,
          },
        });
      } else {
        dispatch({
          type: OBTENER_EVOLUTION_1_EXITO,
          payload: {
            evo1: rest.data.chain.species.name,
            evo2: rest.data.chain.evolves_to[0].species.name,
            evo3: rest.data.chain.evolves_to[0].evolves_to[0].species.name,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export const resetEvolutionAccion = () => (dispatch) => {
  try {
    /*  console.log(rest.data) */
    dispatch({
      type: RESET_EVOLUTION_EXITO,
      payload: {
        evo1: null,
        evo2: null,
        evo3: null,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
