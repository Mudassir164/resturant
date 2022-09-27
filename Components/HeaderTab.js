import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function HeaderTab(props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      }}
    >
      <HeaderButton
        title="Delivery"
        btnColor="black"
        btnTextColor="white"
        activeTab={props.activeTab}
        setactiveTab={props.setactiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnColor="white"
        btnTextColor="black"
        setactiveTab={props.setactiveTab}
        activeTab={props.activeTab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.activeTab === props.title ? "black" : "white",
          borderRadius: 50,

          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          paddingHorizontal: 10,
          marginVertical: 15,
          marginHorizontal: 5,
        }}
        onPress={() => {
          props.setactiveTab(props.title);
        }}
      >
        <Text
          style={{
            color: props.activeTab === props.title ? "white" : "black",
            fontSize: 17,
            fontWeight: "900",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
