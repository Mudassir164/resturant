import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Home from "./Screens/home";
// import ResturantDetails from "./Screens/ResturantDetails";
import Rootnavigation from "./Navigation/navigation";
export default function App() {
  // return <ResturantDetails />;
  // return <Home />;
  return <Rootnavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
