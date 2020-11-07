import React, { useState, useContext } from "react";
import { Switch, StyleSheet, View } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";

const TrackToggle = () => {
  const { startRecording, stopRecording } = useContext(LocationContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if (isEnabled) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  return (
    <View>
      <Switch
        trackColor={{ false: "#ffffff", true: "#ffffff" }}
        thumbColor={isEnabled ? "#6EC5E9" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.togStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  togStyle: {
    alignSelf: "center",
  },
});

export default TrackToggle;
