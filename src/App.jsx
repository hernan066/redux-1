import React from "react";
import Pokemones from "./componets/Pokemones";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Login from "./componets/Login";
import Detalle from "./componets/Detalle";
import Buscar from "./componets/Buscar";
import Register from "./componets/Register";
import ForgotPassword from "./componets/ForgotPassword";




function App() {
  

  return (
    
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/recover_password">
              <ForgotPassword />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/detalle">
              <Detalle />
            </Route>
            <Route path="/buscar">
              <Buscar />
            </Route>
           
            <Route path="/" exact>
              <Pokemones />
            </Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
