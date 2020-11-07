import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "update_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => {
  return () => {
    console.log("Yes");
    dispatch({ type: "start_recording" });
  };
};

const stopRecording = (dispatch) => {
  return () => {
    console.log("No");
    dispatch({ type: "stop_recording" });
  };
};

const updateLocation = (dispatch) => (location) => {
  dispatch({ type: "update_location", payload: location });
  // console.log(secondLocation);
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, updateLocation },
  { recording: true, currentLocation: null }
);
