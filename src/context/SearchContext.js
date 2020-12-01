import createDataContext from "../context/createDataContext";
import connectApi from "../api/connect";

const searchReducer = (state, action) => {
  switch (action.type) {
    case "got_connection":
      return {
        ...state,
        number: action.payload.number,
        name: action.payload.name,
        isConnected: action.payload.isConnected,
      };
    case "error_occured":
      return { ...state, err_user: action.payload };
    case "clear_state":
      return {
        name: null,
        number: null,
        err_user: "",
        connected: "CONNECT",
        err_connect: "",
        disable: false,
        isConnected: false,
      };
    case "connected":
      return {
        ...state,
        connected: action.payload,
        err_connect: "",
        disable: true,
      };
    case "connection_error":
      return { ...state, err_connect: action.payload };
    default:
      return state;
  }
};

const clearPreviousQuery = (dispatch) => {
  return () => {
    dispatch({ type: "clear_state" });
  };
};

const getConnection = (dispatch) => {
  return async (number) => {
    try {
      const response = await connectApi.post("/connectFind", { number });
      dispatch({ type: "got_connection", payload: response.data });
      console.log(response.data);
    } catch (err) {
      console.log("Error Occured");
      dispatch({ type: "error_occured", payload: "No such user found" });
    }
  };
};

const connect = (dispatch) => {
  return async (number) => {
    try {
      console.log(number);
      await connectApi.post("/connect", { number });
      console.log("Connect both users");
      dispatch({ type: "connected", payload: "CONNECTED" });
    } catch (err) {
      dispatch({
        type: "connection_error",
        payload: "Some Error During Connection",
      });
    }
  };
};

export const { Provider, Context } = createDataContext(
  searchReducer,
  { getConnection, clearPreviousQuery, connect },
  {
    number: null,
    name: null,
    err_user: "",
    connected: "CONNECT",
    err_connect: "",
    isConnected: false,
    disable: false,
  }
);
