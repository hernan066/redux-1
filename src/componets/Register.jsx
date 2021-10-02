import React from "react";
import {  useFormik } from "formik";
import * as Yup from "yup"

import "./Register.css";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Completar usuario!!"),
      email: Yup.string().email("Email invalido").required("Completar email!!"),
      password: Yup.string().required("Completar password!!"),
      repeatPassword: Yup.string().required("Completar repetir password!!"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <div className="contenedor">
      <div className="center_register">
        <form onSubmit={formik.handleSubmit}>
          <h2>Register</h2>

          <div className="txt_field">
            <input 
            type="text" 
            onChange={formik.handleChange} 
            autoComplete="off"
            name="userName"
            value={formik.values.userName}
            
            
            
            />

            
            <span></span>
            
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="text" 
            
            onChange={formik.handleChange} 
            autoComplete="off"
            name="email"
            value={formik.values.email}
            />
            <span></span>
            <label>Email</label>
          </div>

          <div className="txt_field">
            <input type="password" 
            onChange={formik.handleChange} 
            name="password"
            value={formik.values.password}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input 
            type="password" 
            onChange={formik.handleChange} 
            name="repeatPassword"
            value={formik.values.repeatPassword}
            />
            <span></span>
            <label>Repeat Password</label>
          </div>

          <input type="submit" value="Register" />

          {formik.errors.userName ? <div className="error-formulario">{formik.errors.userName}</div> : null }
          {formik.errors.userName ? <div className="error-formulario">{formik.errors.email}</div> : null }
          {formik.errors.userName ? <div className="error-formulario">{formik.errors.password}</div> : null }
          {formik.errors.userName ? <div className="error-formulario">{formik.errors.repeatPassword}</div> : null }
        </form>
      </div>
    </div>
  );
};

export default Register;
