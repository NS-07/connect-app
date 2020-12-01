import createDataContext from "./createDataContext";
import connectApi from "../api/connect";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "empty":
      return { connectData: [] };
    case "fetch_locations":
      return { connectData: action.payload };
    default:
      return state;
  }
};

const emptyLocations = (dispatch) => {
  return () => {
    dispatch({
      type: "empty",
    });
  };
};

const fetchLocations = (dispatch) => async () => {
  try {
    await connectApi.put("/update");
    const response = await connectApi.get("/connections");
    dispatch({
      type: "fetch_locations",
      payload: response.data[0].connections,
    });
  } catch (err) {
    console.log("Unknown Error Occured");
  }
};

//Working Correctly
const saveLocation = (dispatch) => async (location) => {
  await connectApi.post("/location", { location });
  console.log(location);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchLocations, saveLocation, emptyLocations },
  { connectData: [] }
);
