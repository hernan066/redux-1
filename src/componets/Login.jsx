import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="contenedor">
      <div className="center_login">
        
        <form>
            <h2>Login</h2>
            
            
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>

          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>

          <div className="pass"> <Link to="/recover_password" exact>Forgot Password?</Link> </div>

          <input type="submit" value="Login" />

          <div className="signup_link">
            Not a member? <Link to="/register" exact>Signup</Link>
            
            
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
