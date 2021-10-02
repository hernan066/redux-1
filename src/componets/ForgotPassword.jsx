import React from 'react';
import "./ForgotPassword.css";

const ForgotPassword = () => {
    return (
        <div className="contenedor">
      <div className="center_password">
        
        <form>
            <h2>Recover password</h2>
            
            
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Enter your email</label>
          </div>

          

          

          <input type="submit" value="Send" />

         
        </form>
      </div>
    </div>
    )
}

export default ForgotPassword
