import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as SearchContext } from "../context/SearchContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  const { emptyLocations } = useContext(TrackContext);
  const { clearPreviousQuery } = useContext(SearchContext);

  return (
    <SafeAreaView forceInset="top alaways">
      <Text style={{ fontSize: 36, marginBottom: 10 }}>Account Screen</Text>
      <Button
        title="Sign Out"
        onPress={() => {
          emptyLocations();
          signout();
          clearPreviousQuery();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
