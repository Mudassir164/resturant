import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodSelect = (food, items) => {
    return Boolean(items.find((item) => item.title === food.title));
  };
  const dispatch = useDispatch();
  const selectItm = (item, checkBoxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkBoxValue: checkBoxValue,
      },
    });
  };
  return (
    <ScrollView style={{ marginBottom: 30 }}>
      {foods.map((data, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              // margin: 5,
              paddingVertical: 10,
              paddingHorizontal: 12,
            }}
          >
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "green", borderRadius: 0 }}
                size={25}
                fillColor="green"
                unfillColor="white"
                onPress={(checkBoxValue) => {
                  selectItm(data, checkBoxValue);
                }}
                isChecked={isFoodSelect(data, cartItems)}
              />
            )}

            <Description
              title={data.title}
              description={data.description}
              marginLeft={marginLeft ? marginLeft : 0}
              price={data.price}
            />
            <ImageC
              marginLeft={marginLeft ? marginLeft : 0}
              image={data.image}
            />
          </View>
          <Divider width={0.5} style={{ marginHorizontal: 10 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const Description = (props) => {
  return (
    <View style={{ padding: 5, justifyContent: "space-evenly", width: "70%" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
      <Text style={{ fontSize: 14 }}>{props.description}</Text>
      <Text style={{ fontSize: 14 }}>{props.price}</Text>
    </View>
  );
};

const ImageC = ({ marginLeft, ...props }) => {
  return (
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: 90,
        height: 90,
        borderRadius: 15,
        marginLeft: marginLeft,
      }}
    />
  );
};
