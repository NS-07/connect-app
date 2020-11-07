import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { saveLocation } = useContext(TrackContext);
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  const saveUserLocation = () => {
    saveLocation(currentLocation);
  };

  return [saveUserLocation];
};
