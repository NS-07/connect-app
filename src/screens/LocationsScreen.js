import React, { useEffect, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const LocationsScreen = ({ navigation }) => {
  const {
    state: { connectData },
    fetchLocations,
    saveLocation,
  } = useContext(TrackContext);
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  // This state has all the locations and only have to render this on the screen
  useEffect(() => {
    const getLocations = navigation.addListener("focus", () => {
      saveLocation(currentLocation);
      fetchLocations();
    });

    return getLocations;
  });

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
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
        {connectData.map((connect, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: connect.coords.latitude,
              longitude: connect.coords.longitude,
            }}
            title={connect.name}
            description={connect.number}
          />
        ))}
      </MapView>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Feather name="search" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.connectContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Connect")}>
          <FontAwesome5 name="user-friends" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 752,
    position: "relative",
  },
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    position: "absolute",
    zIndex: 10,
    top: 610,
    left: "84%",
  },
  connectContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    position: "absolute",
    zIndex: 10,
    top: 660,
    left: "84%",
  },
});

export default LocationsScreen;
