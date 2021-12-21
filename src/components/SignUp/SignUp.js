import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import "../ContactPage/ContactPage.scss";
const SignUp = () => {
  const { signup, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <>
      <form className="form-container my-5" onSubmit={handleSignup}>
        <h5 className="form-title">Registrarme</h5>
        <span className="">Email</span>
        <input
          type="text"
          className="form-input"
          id="email-signup"
          name="email-singup"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error === "auth/email-already-in-use" && (
          <p className="form-error">Usuario ya registrado</p>
        )}
        {error === "auth/invalid-email" && (
          <p className="form-error">Ingrese un email válido</p>
        )}
        <span className="">Contaseña</span>
        <input
          type="password"
          className="form-input"
          id="password-signup"
          name="password-singup"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error === "auth/weak-password" && (
          <p className="form-error">
            La contraseña debe contener más de 6 caracteres
          </p>
        )}
        <input type="submit" value="Enviar" className="btn btn-primary" />
      </form>
    </>
  );
};

export default SignUp;
