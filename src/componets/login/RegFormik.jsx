import { Formik } from "formik";
import React from "react";

const RegFormik = () => {
  return (
    <>
      <Formik>
        initialValues: {{
            userName: "",
            email: "",
            password: "",
            repeatPassword: "",
        }},
        onSubmit{(valores, {resetForm})=>{
            resetForm();
            console.log("Formulario enviado")
        }}
        
        {({handleSubmit, handleChange, values, errors, touched}) => (
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            <div className="mb-4 mt-3">
              <input
                type="text"
                onChange={handleChange}
                id="userName"
                name="userName"
                value={values.userName}
                className={`form-control ${
                    touched.userName && errors.userName
                    ? "is-invalid"
                    : null
                }`}
                placeholder="Username"
              />
              {touched.userName && errors.userName ? (
                <p className="error-formulario">{errors.userName}</p>
              ) : null}
            </div>

            <div className="mb-4">
              <input
                type="text"
                onChange={handleChange}
                autoComplete="off"
                name="email"
                value={values.email}
                className={`form-control ${
                  touched.email && errors.email
                    ? "is-invalid"
                    : null
                }`}
                placeholder="Email"
              />
              {touched.email && errors.email ? (
                <div className="error-formulario">{errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={values.password}
                className={`form-control ${
                  touched.password && errors.password
                    ? "is-invalid"
                    : null
                }`}
                placeholder="Password"
              />
              {touched.password && errors.password ? (
                <div className="error-formulario">{errors.password}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="password"
                onChange={handleChange}
                name="repeatPassword"
                value={values.repeatPassword}
                className={`form-control ${
                  errors.repeatPassword && errors.repeatPassword 
                    ? "is-invalid"
                    : null
                }`}
                placeholder="Repeat Password"
              />
              {touched.repeatPassword && errors.repeatPassword ? (
                <div className="error-formulario">
                  {errors.repeatPassword}
                </div>
              ) : null}
            </div>

            <input type="submit" value="Register" />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegFormik;
