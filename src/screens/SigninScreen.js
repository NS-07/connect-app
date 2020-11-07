import React, { useContext, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = (props) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const listener = props.navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return listener;
  }, []);

  return (
    <>
      <AuthForm
        buttonTitle="SIGN IN"
        navigation={props.navigation}
        textPlace={"Sign Up"}
        screenToGo="Signup"
        func={signin}
        errorMessage={state.errorMessage}
      />
    </>
  );
};

export default SigninScreen;
