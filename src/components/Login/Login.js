import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

//STYLES:
import "./Login.scss";
import "../../_custom.scss";
import "../ContactPage/ContactPage.scss";

const Login = () => {
  return (
    <div className="container-flex-row">
      <div className="violet-container shorter-container">
        <SignUp />
      </div>
      <div className="white-container-small">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
