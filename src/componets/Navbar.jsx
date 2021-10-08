import React from "react";
import logo from "./logo.png";
import { Link, NavLink, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesionAccion } from "../redux/usuarioDucks";


const Navbar = ({history}) => {
 
  const dispatch = useDispatch();
  const activo = useSelector(store => store.usuario.activo);
 /*  const usuario = useSelector(store => store.usuario.user.nombre); */

  const cerrarSesion = ()=>{
    dispatch(cerrarSesionAccion());
    history.push('/login');
  }
 
 
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
              <NavLink to="/lista">
                Lista
              </NavLink>
            </li>
            
            
            {
              activo 
                ?  <li>
                <button className="btn btn-danger text-capitalize " onClick={()=>cerrarSesion()} >
                  {/* {`Logout ${usuario} `} */} Cerrar sesion
                </button>
              </li>
                
                :<li> <NavLink className="btn btn-danger " to="/login">
                  Login
                </NavLink>
              </li>
            }
           
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
