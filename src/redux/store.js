import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import pokeReducer from './pokeDucks';
import usuarioReducer, { leerUsuarioActivoAccion } from './usuarioDucks';

import speciesReducer from './speciesDuks';
import evolutionReducer from './evolucionDucks';
import cardPokeReducer from './cardPokeDucks';


const rootReducer = combineReducers({
    pokemones: pokeReducer,
    usuario: usuarioReducer,
    species: speciesReducer,
    evoluciones: evolutionReducer,
    cardPoke : cardPokeReducer
    //otroReducer: masReducer
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    leerUsuarioActivoAccion()(store.dispatch);
    return store;
}