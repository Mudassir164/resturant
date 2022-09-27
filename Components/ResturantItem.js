import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];
export default function ResturantItem(props) {
  return props.ResturantData.map((itm, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        props.navigation.navigate("ResturantDetails", {
          name: itm.name,
          image: itm.image_url,
          price: itm.price,
          reviews: itm.review_count,
          rating: itm.rating,
          categories: itm.categories,
        });
        // console.log(itm);
      }}
    >
      <View style={{ padding: 10 }}>
        <Images src={itm.image_url} />
        <RestaurantInfo name={itm.name} ratting={itm.rating} />
      </View>
    </TouchableOpacity>
  ));
}

const Images = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.src,
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 10, right: 15 }}>
        <MaterialCommunityIcons name="heart-outline" size={24} />
      </TouchableOpacity>
    </>
  );
};
const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.ratting}</Text>
    </View>
  </View>
);
