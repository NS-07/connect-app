import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";

const ConnectionScreen = () => {
  const {
    state: { connectData },
  } = useContext(TrackContext);
  return (
    <View>
      {connectData.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar rounder title="U" />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.number}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectionScreen;
