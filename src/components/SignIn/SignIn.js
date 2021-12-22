import React, {useState, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import Success from "../Success/Succes";
import { Redirect } from "react-router";
import { set } from "lodash";

const SignIn = () => {
  const { login, logged, error, googleAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
  <>
      {logged ? <Redirect to={"/"}/> :
    <div className="form-container">
      <form className="form">
      <h5 className="form-title">
        Iniciar Sesión
      </h5>

      <span className="form-span">
        Email
      </span>
      <input
        className="form-input form-input-errors"
        type="text"
        id="emailSI"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        />

        {error === "auth/invalid-email" && <p className="form-error">Mail inválido</p>}
        {error === "auth/email-already-in-use" && <p  className="form-error">Mail ya registrado</p>}
        {error === "auth/user-not-found" && <p className="form-error">Usuario no encontrado</p>}
        
      <span className="form-span">
        Password
      </span>
      <input
        className="form-input form-input-errors"
        type="password"
        id="passwordSI"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        />
        
    {error === "auth/weak-password" && <p className="form-error">La contraseña debe contener más de 6 caracteres</p>}
        
        <span className="form-span form-span-google">O iniciar sesión con:</span>
        
        <button type="button" className="btn btn-primary mx-3" onClick={googleAuth}> Google </button>
        <button type="button" className="btn btn-primary" onClick={() => login(email, password)}>Login</button>
        
      {/* <CustomButton
        textButton={"Google"}
        onClick={()=>googleAuth}
        />
        
        <div className="modal-footer">
          <CustomButton
            textButton={"Iniciar Sesión"}
            onClick={() => login(email, password)}
        /> */}
        {/* </div> */}
    </form>
      </div>
      }
        </>
  );
};

export default SignIn;
