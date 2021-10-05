import React from "react";
import logo from "./logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div id="barra">
        <div id="marco-logo">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        <nav>
          <ul className="nav_link">
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/buscar">
                Buscar
              </NavLink>
            </li>
            
            <li>
              <NavLink className="btn btn-danger " to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
