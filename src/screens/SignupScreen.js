import React, { useContext, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = (props) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(
    AuthContext
  );

  useEffect(() => {
    tryLocalSignin();
    const listener = props.navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return listener;
  }, []);

  return (
    <>
      <AuthForm
        buttonTitle="SIGN UP"
        navigation={props.navigation}
        textPlace="Sign In"
        screenToGo="Signin"
        func={signup}
        errorMessage={state.errorMessage}
      />
    </>
  );
};

export default SignupScreen;
