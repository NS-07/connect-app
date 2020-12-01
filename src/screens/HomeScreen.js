import "../_mockLocation";
import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import { withNavigationFocus } from "@react-navigation/compat";

const HomeScreen = ({ isFocused }) => {
  const { updateLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, updateLocation);

  return (
    <View>
      <Map />
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
});

export default withNavigationFocus(HomeScreen);
