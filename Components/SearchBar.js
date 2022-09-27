import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
// import { TextInput } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";

export default function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  props.setCity(searchQuery);
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      placeholder="Search city"
    />
    // <View style={{ marginTop: 15, flexDirection: "row" }}>
    //   {/* <GooglePlacesAutocomplete
    //     query={{
    //       key: "6356f684db11aba74d0214b20207da79",
    //       language: "en",
    //     }}
    //     onPress={(data, details = null) => {
    //       console.log(data);
    //     }}
    //     placeholder="search"
    //     styles={{
    //       textInput: {
    //         backgroundColor: "#eee",
    //         borderRadius: 20,
    //         fontWeight: "700",
    //         marginTop: 7,
    //       },
    //       textInputContainer: {
    //         backgroundColor: "#eee",
    //         borderRadius: 50,
    //         flexDirection: "row",
    //         alignItems: "center",
    //         marginRight: 10,
    //       },
    //     }}
    //     renderLeftButton={() => (
    //       <View style={{ marginLeft: 10 }}>
    //         <Ionicons name="location-sharp" size={24} />
    //       </View>
    //     )}
    //     renderRightButton={() => (
    //       <View
    //         style={{
    //           backgroundColor: "white",
    //           flexDirection: "row",
    //           alignItems: "center",
    //           justifyContent: "space-between",
    //           padding: 10,
    //           marginRight: 10,
    //           borderRadius: 20,
    //         }}
    //       >
    //         <AntDesign name="clockcircle" size={11} />
    //         <Text>Search</Text>
    //       </View>
    //     )}
    //   /> */}
    //   {/* <TextInput /> */}

    // </View>
  );
}
