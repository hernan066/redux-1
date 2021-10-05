import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ingresoUsuarioAccion } from "../redux/usuarioDucks";

/* import "./Register.css"; */

const Register = () => {
  
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Requerido"),
      email: Yup.string().email("Email invalido").required("Requerido"),
      password: Yup.string()
        .required("Requerido")
        .oneOf(
          [Yup.ref("repeatPassword")],
          "Las contraseñas deben ser iguales"
        ),
      repeatPassword: Yup.string()
        .required("Requerido")
        .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales"),
    }),
    onSubmit: (formData, { resetForm }) => {
      resetForm();
      console.log("Datos", formData);
    },
  });

  return (
    <div className="contenedor">
      <div className="center_register">
        <form onSubmit={formik.handleSubmit}>
          <h2>Register(solo google)</h2>

          <div className="mb-4 mt-3">
            <input
              type="text"
              onChange={formik.handleChange}
              autoComplete="off"
              name="userName"
              value={formik.values.userName}
              className={`form-control ${
                formik.errors.userName && formik.errors.userName
                  ? "is-invalid"
                  : null
              }`}
              placeholder="Username"
            />
            {formik.errors.userName && formik.errors.userName ? (
              <p className="error-formulario">{formik.errors.userName}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <input
              type="text"
              onChange={formik.handleChange}
              autoComplete="off"
              name="email"
              value={formik.values.email}
              className={`form-control ${
                formik.touched.email && formik.errors.email
                  ? "is-invalid"
                  : null
              }`}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-formulario">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <input
              type="password"
              onChange={formik.handleChange}
              name="password"
              value={formik.values.password}
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : null
              }`}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-formulario">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <input
              type="password"
              onChange={formik.handleChange}
              name="repeatPassword"
              value={formik.values.repeatPassword}
              className={`form-control ${
                formik.touched.repeatPassword && formik.errors.repeatPassword
                  ? "is-invalid"
                  : null
              }`}
              placeholder="Repeat Password"
            />
            {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
              <div className="error-formulario">
                {formik.errors.repeatPassword}
              </div>
            ) : null}
          </div>

          <input type="submit" value="Register" />
                      
          <div className="google-btn" onClick={()=> dispatch(ingresoUsuarioAccion())} >
            <div className="google-icon-wrapper">
              <img
                alt=""
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              <b>Register with google</b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
