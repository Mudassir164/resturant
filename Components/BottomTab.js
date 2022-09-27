import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTab() {
  const [activecolor, setactivecolor] = useState("Home");
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 5,
      }}
    >
      <Icon
        name="home"
        text="Home"
        activecolor={activecolor}
        setactivecolor={setactivecolor}
      />
      <Icon
        name="search"
        text="Browse"
        activecolor={activecolor}
        setactivecolor={setactivecolor}
      />
      <Icon
        name="shopping-bag"
        text="Grocery"
        activecolor={activecolor}
        setactivecolor={setactivecolor}
      />
      <Icon
        name="receipt"
        text="Orders"
        activecolor={activecolor}
        setactivecolor={setactivecolor}
      />
      <Icon
        name="user"
        text="Account"
        activecolor={activecolor}
        setactivecolor={setactivecolor}
      />
    </View>
  );
}
const Icon = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setactivecolor(props.name);
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesome5
          name={props.name}
          size={22}
          color={props.name === props.activecolor ? "black" : "grey"}
        />
        <Text
          style={{
            fontWeight: "700",
            color: props.name === props.activecolor ? "black" : "grey",
          }}
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
