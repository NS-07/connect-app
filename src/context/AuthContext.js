import createDataContext from "./createDataContext";
import connectApi from "../api/connect";
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "got_token":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({
        type: "got_token",
        payload: token,
      });
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const signup = (dispatch) => {
  return async ({ number, name, password }) => {
    try {
      const response = await connectApi.post("/signup", {
        number,
        name,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "got_token", payload: response.data.token });
    } catch (err) {
      dispatch({ type: "add_error", payload: "Number is already present" });
    }
  };
};

const signin = (dispatch) => {
  return async ({ number, password }) => {
    try {
      const response = await connectApi.post("/signin", { number, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "got_token", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
