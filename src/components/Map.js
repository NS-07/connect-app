import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Circle, circle } from "react-native-maps";
import { ActivityIndicator } from "react-native-paper";
import { Context as LocationContext } from "../context/LocationContext";
const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  //console.log(state);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 708,
    position: "relative",
  },
});

export default Map;
