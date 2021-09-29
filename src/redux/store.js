import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import pokesReducer from './pokesDucks';

const rootReducer = combineReducers({
    pokemones: pokesReducer
    //otroReducer: masReducer
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store;
}