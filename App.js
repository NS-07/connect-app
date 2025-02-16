import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LocationsScreen from "./src/screens/LocationsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ConnectionScreen from "./src/screens/ConnectionScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { Context as AuthContext } from "./src/context/AuthContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { Provider as SearchProvider } from "./src/context/SearchContext";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const LocationStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#6EC5E9" },
          headerTitleStyle: { color: "#20639B" },
        }}
      />
    </HomeStack.Navigator>
  );
}

function LocationStackScreen() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          headerStyle: { backgroundColor: "#6EC5E9" },
          headerTitleStyle: { color: "#20639B" },
        }}
      />
      <LocationStack.Screen
        name="Connect"
        component={ConnectionScreen}
        options={{
          headerStyle: { backgroundColor: "#6EC5E9" },
          headerTitleStyle: { color: "#20639B" },
        }}
      />
      <LocationStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: { backgroundColor: "#6EC5E9" },
          headerTitleStyle: { color: "#20639B" },
        }}
      />
    </LocationStack.Navigator>
  );
}

function App() {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token === null ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Signup"
            component={SignupScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Signin"
            component={SigninScreen}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          activeColor="#f0edf6"
          barStyle={{ backgroundColor: "#6EC5E9" }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Locations"
            component={LocationStackScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="location" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="account-circle" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <SearchProvider>
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </SearchProvider>
  );
};
