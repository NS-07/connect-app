import createDataContext from "./createDataContext";
import connectApi from "../api/connect";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_locations":
      return action.payload;
    default:
      return state;
  }
};

const fetchLocations = (dispatch) => async () => {
  // const response = await connectApi.get("/connectionLocation");
  // dispatch({ type: "fetch_locations", payload: response.data });
  console.log("Nailed it");
};

const saveLocation = (dispatch) => async (location) => {
  // await connectApi.post("/location", { location });
  //Giving location value of null here
  // console.log(location);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchLocations, saveLocation },
  []
);
