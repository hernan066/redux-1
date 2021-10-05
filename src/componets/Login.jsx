import React from "react";
import { Link } from "react-router-dom";
/* import "./Login.css"; */

const Login = () => {
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

          <div className="google-btn">
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

export default Login;
