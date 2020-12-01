import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "update_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const updateLocation = (dispatch) => (location) => {
  dispatch({ type: "update_location", payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { updateLocation },
  { currentLocation: null }
);
