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

          <div className="signup_link">
            Not a member? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
