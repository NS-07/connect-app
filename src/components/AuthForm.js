import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Text, Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const AuthForm = ({
  buttonTitle,
  navigation,
  textPlace,
  screenToGo,
  func,
  errorMessage,
}) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        source={require("../../assets/signup_signin.jpg")}
      >
        <View>
          <Text h1 style={styles.brand}>
            connect
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Feather style={styles.icon} name="phone" size={28} color="black" />
            <TextInput
              value={number}
              onChangeText={(newNumber) => setNumber(newNumber)}
              placeholder="Mobile Number"
              autoCompleteType="off"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputText}
            />
          </View>
          {buttonTitle === "SIGN UP" ? (
            <View style={styles.input}>
              <MaterialIcons
                style={styles.icon}
                name="person-outline"
                size={32}
                color="black"
              />
              <TextInput
                value={name}
                onChangeText={(newname) => setName(newname)}
                placeholder="First Name"
                autoCompleteType="off"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputText}
              />
            </View>
          ) : null}
          <View style={styles.input}>
            <Feather style={styles.icon} name="lock" size={32} color="black" />
            <TextInput
              value={password}
              onChangeText={(newpassword) => setPassword(newpassword)}
              placeholder="Password"
              autoCompleteType="off"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              style={styles.inputText}
            />
          </View>
          {buttonTitle === "SIGN UP" ? (
            <Button
              title={"SIGN UP"}
              onPress={() => func({ number, name, password })}
            />
          ) : (
            <Button
              title={"SIGN IN"}
              onPress={() => func({ number, password })}
            />
          )}
          <TouchableOpacity onPress={() => navigation.navigate(screenToGo)}>
            <Text h5 style={{ marginTop: 10, color: "white" }}>
              Already have an account? {textPlace}
            </Text>
          </TouchableOpacity>
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
    alignItems: "center",
  },
  form: {
    width: "90%",
  },
  input: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 10,
  },
  inputText: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 5,
  },
  icon: {
    alignSelf: "center",
  },
  brand: {
    color: "#6EC5E9",
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
  },
});

export default AuthForm;
