import React from "react";

const ForgotPassword = () => {
  return (
    <div className="contenedor">
      <div className="center_password">
        <form>
          <h2>Recover password</h2>

          <div className="mt-4 mb-4">
            <label>Enter your email</label>

            <input type="text" className="form-control" />
            <span></span>
          </div>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
