import React from "react";
import { View, Text, Image } from "react-native";

const Images =
  "https://s3-media4.fl.yelpcdn.com/bphoto/LuSzR8cpVQRofXOT_bMi1A/o.jpg";
const Description = "Farmhouse kitchen thai cusine";
const ratting = "Thai•Comfort Food • $$ • 🎫 • 4 ⭐ (2912+) ";
export default function About(props) {
  // console.log(props.route.params);
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  // console.log(image);

  return (
    <View>
      <ImageC url={image} />
      <DescriptionC text={name} />
      <RattingC ratting={description} />
    </View>
  );
}
const ImageC = (props) => {
  return (
    <Image
      source={{
        uri: props.url,
      }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const DescriptionC = (props) => {
  return (
    <Text style={{ fontSize: 25, fontWeight: "400", padding: 5 }}>
      {props.text}
    </Text>
  );
};
const RattingC = (props) => {
  return <Text style={{ padding: 10 }}>{props.ratting}</Text>;
};
