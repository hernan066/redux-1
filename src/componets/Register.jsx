import React from 'react';

import "./Register.css";

const Register = () => {
    return (
        <div className="contenedor">
        <div className="center_register">
          
          <form>
              <h2>Register</h2>
              
              
            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>Email</label>
            </div>
  
            <div className="txt_field">
              <input type="password" required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="txt_field">
              <input type="password" required />
              <span></span>
              <label>Repeat Password</label>
            </div>
  
           
  
            <input type="submit" value="Register" />
  
            
          </form>
        </div>
      </div>
    )
}

export default Register
