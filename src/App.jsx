import React, { useEffect, useState } from "react";
import Pokemones from "./componets/Pokemones";



import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Login from "./componets/Login";

import Buscar from "./componets/Buscar";
import Register from "./componets/Register";
import ForgotPassword from "./componets/ForgotPassword";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Lista from "./componets/Lista";
import DetallePoke from "./componets/DetallePoke";




function App() {
  
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    
    const fechUser = ()=>{
      const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
    }
    fechUser();
    
  }, []);

  /////////////////////////////////////////////////
  ///Si usamos RutaPrivada
  ///////////////////////////////////////////////////
  
  const RutaPrivada = ({component, path, ...rest}) => {
    if(localStorage.getItem('usuario')){
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      if(usuarioStorage.uid === firebaseUser.uid){
        console.log('son iguales')
        return <Route component={component} path={path} {...rest} />
      }else{
        console.log('no exite')
        return <Redirect to="/login" {...rest} />
      }
    }else{
      return <Redirect to="/login" {...rest} />
    }
  }


  return firebaseUser !== false ?(
    
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route component={DetallePoke} path="/detalle" exact />
            <Route component={Lista} path="/lista" exact />
            <Route component={ForgotPassword} path="/recover_password" exact />
            <Route component={Register} path="/register" exact/>
            <Route component={Login} path="/login" exact/>
            <RutaPrivada component={Buscar} path="/buscar" exact />
            <Route component={Pokemones} path="/" exact />
             
            
          </Switch>
        </Router>
      </div>
    
  ) : <div className="loading">
          <div className="loading_full_height">

          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
      </div>
  
}

export default App;
