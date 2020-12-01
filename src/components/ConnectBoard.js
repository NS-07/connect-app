import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";

const ConnectBoard = (props) => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Avatar rounder title="U" size={100} />
        <View style={{ margin: 50 }}>
          <Text>{props.name}</Text>
          <Text>{props.number}</Text>
        </View>
      </View>
      <Button
        title={props.connected}
        type="clear"
        disabled={props.isConnected || props.disable}
        onPress={() => props.connect(props.number)}
      />
      {props.err_connect ? (
        <View>
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            {props.err_connect}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectBoard;
