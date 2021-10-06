import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ingresoUsuarioAccion } from "../redux/usuarioDucks";
/* import "./Login.css"; */

////////////////////////////////////////////////
///////se seleciona con crl + d en VS//////////
///////////////////////////////////////////////
const Login = ({history}) => {
  
  const dispatch = useDispatch();
  const loading = useSelector(store => store.usuario.loading);
  const activo = useSelector(store => store.usuario.activo);

  useEffect(() => {
    console.log(activo);
    if(activo){
      history.push("/")
    }
  }, [activo, history])
  
  return (
    
    
    
    <div className="contenedor">
      <div className="center_login">
        <form>
          <h2>Login</h2>

          <div className="mb-4 mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="pass">
            {" "}
            <Link to="/recover_password">Forgot Password?</Link>{" "}
          </div>

          <input type="submit" value="Login" />

          
          {/* transformar el div en un boton, modificar css */}
          <div
            className="google-btn" 
            onClick={()=> dispatch(ingresoUsuarioAccion())} 
            disable = {loading}
          >
            <div className="google-icon-wrapper">
              <img
                alt=""
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              <b>Login with google</b>
            </p>
          </div>

          <div className="signup_link">
            Not a member? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter (Login);
