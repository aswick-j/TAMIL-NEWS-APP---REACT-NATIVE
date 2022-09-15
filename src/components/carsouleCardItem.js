import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";



export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground
        source={{ uri: item.thumbnail }}
        style={{ height: 150, width: 300}}
        imageStyle={{ borderRadius: 15}}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            position: "absolute", 
            bottom: 0, 
            left: 0,
            marginLeft: 10,
            marginBottom: 10,
            // backgroundColor:"grey",
          }}
        >
          {item.title}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 0,
    marginTop: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: SLIDER_WIDTH,
    height: 100,
  },
  header: {
    color: "#222",
    fontSize: 10,
    fontWeight: "bold",
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
