import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import HeaderTab from "../Components/HeaderTab";
// import SearchBar from "../Components/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Categories from "../Components/categories";
import ResturantItem from "../Components/ResturantItem";
import { localRestaurants } from "../Components/ResturantItem";
import BottomTab from "../Components/BottomTab";

// const YELP_API_KEY =
//   "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
const YELP_API_KEY =
  "pvA5TAQZW3nGAQelJulU6CVh5awhJYdgAYWerBTWfMp9OdAMObhxju8D03j_Ae0wQJDizH0vgWyVmimMxJLOrp1_b0ttPhTsTS0L6jWZk-PYsN8539lpajxNA5OYYXYx";

export default function Home({ navigation }) {
  const [ResturantData, setResturantData] = useState(localRestaurants);
  const [City, setCity] = useState("NewYork");
  const [activeTab, setactiveTab] = useState("Delivery");

  const getResturantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${City}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json.businesses.filter((data) =>
            data.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getResturantsFromYelp();
  }, [activeTab, City]);
  // console.log(ResturantData);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          borderColor: "black",
          height: 170,
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
        }}
      >
        <HeaderTab activeTab={activeTab} setactiveTab={setactiveTab} />
        {/* <SearchBar setCity={setCity} /> */}
      </View>
      <ScrollView>
        <Categories />
        <ResturantItem ResturantData={ResturantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}
