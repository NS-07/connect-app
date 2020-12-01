import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { Context as SearchContext } from "../context/SearchContext";
import ConnectBoard from "../components/ConnectBoard";

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const {
    state: {
      name,
      number,
      err_user,
      connected,
      err_connect,
      disable,
      isConnected,
    },
    getConnection,
    clearPreviousQuery,
    connect,
  } = useContext(SearchContext);
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => {
          clearPreviousQuery();
          getConnection(term);
        }}
      />
      {name ? (
        <ConnectBoard
          name={name}
          number={number}
          connect={connect}
          connected={connected}
          err_connect={err_connect}
          disable={disable}
          isConnected={isConnected}
        />
      ) : null}
      {err_user ? (
        <View>
          <Text style={{ alignSelf: "center", fontSize: 20 }}>{err_user}</Text>
        </View>
      ) : null}
    </>
  );
};

export default SearchScreen;
