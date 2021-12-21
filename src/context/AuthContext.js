import React, { useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
import Success from "../components/Success/Succes";
import Errors from "../components/Errors/Errors"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [error, setError] = useState("");

  const [user, setUser] = useState();
  const [logged, setLogged] = useState(false);

  const provider = new GoogleAuthProvider();

  let errorsAuth = {};

  const logoutSuccess = () => {
    <Success message={"Cierre de sesión exitoso"}/>
  }

  //LOGIN SIGN UP
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
  title: 'Bienvenidx!',
  text: 'Usuario creado exitosamente',
  icon: 'success',
          confirmButtonText: 'OK'

        })
          setError("");
        // <Success message={"Usuario creado correctamente"}/>
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage",errorMessage, "errorCode" , errorCode)
        setError(errorCode);
      });
  };

  //LOGIN SIGN IN
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setError("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        setError(errorCode)
        errorsAuth.mensajeErrorLogin= {errorMessage}
      });
  };

  //LOGOUT-------------------
  const logout = () => {
    signOut(auth)
      .then(() => {
        setError("");
        logoutSuccess();
      })
      .catch((error) => {
        const errorLogout = "Parece que hubo un problema con el cierre de sesión, intenta nuevamente"
        setError(errorLogout)
      });
  };

  //GOOGLEAUTH---------------
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("GOOGLEAUTH: ",credential, token, user);
        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const emailError = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage);
        // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLogged(true);
        setError("");
        // ...
      } else {
        // User is signed out
        // ...
        setLogged(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logged, error, login, logout, signup, googleAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
