import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

const LocationsScreen = ({ navigation }) => {
  const { state, fetchLocations } = useContext(TrackContext);
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  // This state has all the locations and only have to render this on the screen
  useEffect(() => {
    const getLocations = navigation.addListener("focus", () => {
      fetchLocations();
    });

    return getLocations;
  });

  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 762,
    position: "relative",
  },
});

export default LocationsScreen;
