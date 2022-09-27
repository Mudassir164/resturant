import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../Components/About/MenuItems";
import firebase from "../firebase";
import { ScrollView } from "react-native";
const OrderCompleted = () => {
  const [lastorder, setLastOrder] = useState({
    items: [
      {
        title: "Chicken Caesar Salad",
        description:
          "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$21.50",
        image:
          "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
      },
    ],
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubcribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubcribe();
  }, []);
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", ""))) //for genrate [21,32,12]
    .reduce((prev, cur) => prev + cur, 0); //for adding total price

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={styles.animation}
          autoPlay
          speed={0.7}
          loop={false}
          source={require("../assets/animations/782-check-mark-success.json")}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Your order at {restaurantName} has been placed for {totalUSD} dollar
        </Text>
        <ScrollView>
          <MenuItems
            hideCheckbox={true}
            foods={lastorder.items}
            marginLeft={10}
          />

          <LottieView
            style={styles.animation}
            autoPlay
            speed={0.7}
            loop={false}
            source={require("../assets/animations/cooking.json")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "white",
  },
  animation: { height: 100, alignSelf: "center", marginBottom: 30 },
});
