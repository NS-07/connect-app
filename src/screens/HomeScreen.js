import "../_mockLocation";
import React, { useContext, useCallback, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "@react-navigation/compat";
import TrackToggle from "../components/TrackToggle";
import useSaveLocation from "../hooks/useSaveLocation";

const HomeScreen = ({ isFocused }) => {
  const [saveUserLocation] = useSaveLocation();
  const {
    state: { recording },
    updateLocation,
  } = useContext(LocationContext);
  // useEffect(() => {

  // })
  const callback = useCallback(
    (location) => {
      updateLocation(location);
      saveUserLocation();
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <View>
      <Map />
      <View style={styles.toggleContainer}>
        <TrackToggle />
      </View>
      {err ? (
        <View style={styles.errorContainer}>
          <Text style={{ alignSelf: "center" }}>
            PLEASE ENABLE LOCATION SERVICES
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: "center",
    width: "100%",
    height: 36,
    position: "absolute",
    top: 670,
    zIndex: 10,
    color: "black",
    backgroundColor: "#20639B",
  },
  toggleContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    position: "absolute",
    zIndex: 10,
    top: 660,
    left: "84%",
  },
});

export default withNavigationFocus(HomeScreen);
