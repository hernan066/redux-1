import React from 'react';
import { Provider } from 'react-redux';
import Pokemones from './componets/Pokemones';
import generateStore from './redux/store';



function App() {
  
  const store = generateStore()
  
  return (
    <Provider store={store}>
     <Pokemones />
     
    </Provider>
  );
}

export default App;
