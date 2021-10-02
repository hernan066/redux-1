import React from "react";
import { Provider } from "react-redux";
import Pokemones from "./componets/Pokemones";
import generateStore from "./redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Login from "./componets/Login";
import Detalle from "./componets/Detalle";
import Buscar from "./componets/Buscar";
import Register from "./componets/Register";
import ForgotPassword from "./componets/ForgotPassword";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
