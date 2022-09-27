import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Screens/home";
import ResturantDetails from "../Screens/ResturantDetails";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../Redux/store";
import OrderCompleted from "../Screens/OrderCompleted";

const store = configureStore();
export default function Rootnavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ResturantDetails" component={ResturantDetails} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
