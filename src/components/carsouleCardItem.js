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

const { width } = Dimensions.get("screen");

const CarouselCardItem = ({ item, index }) => {
  return (
    // <View style={styles.container} key={index}>
    //   <ImageBackground
    //     source={{ uri: item.image }}
    //     style={{ height: 150, width: 300}}
    //     imageStyle={{ borderRadius: 15}}
    //   >
    //     <Text
    //       style={{
    //         fontWeight: "bold",
    //         color: "white",
    //         position: "absolute", 
    //         bottom: 0, 
    //         left: 0,
    //         marginLeft: 10,
    //         marginBottom: 10,
    //         backgroundColor:"black",
    //       }}
    //     >
    //       {item.title}
    //     </Text>
    //   </ImageBackground>
    // </View>
    <View style={styles.card}>
              <Image source={{ uri: item.thumbnail }} style={styles.cardImage} />
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 2
                  }}
                >
                  <Text numberOfLines={3} style={{ fontSize: 14, fontWeight: "bold", }}>
                    {item.title}
                  </Text>
                  {/* <Text
                    style={{fontWeight: 'bold', color:"blue", fontSize: 16}}>
                    {data.published_date}
                  </Text> */}
                </View>

                {/* Location text */}

                {/* <Text style={{ color: "grey", fontSize: 14, marginTop: 5 }}>
                    {data.published_date}
                  </Text> */}

                {/* Facilities container */}
                {/* <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <View style={style.facility}>
                    <Icon name="hotel" size={18} />
                    <Text style={style.facilityText}>2</Text>
                  </View>
                  <View style={style.facility}>
                    <Icon name="bathtub" size={18} />
                    <Text style={style.facilityText}>2</Text>
                  </View>
                  <View style={style.facility}>
                    <Icon name="aspect-ratio" size={18} />
                    <Text style={style.facilityText}>100m</Text>
                  </View>
                </View> */}
              </View>
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
  card: {
    height: 200,
    backgroundColor: "white",
    elevation: 10,
    width: width - 100,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    marginBottom:20
  },
  cardImage: {
    // width: SLIDER_WIDTH,
    height: 100,
    borderRadius: 15,
  },
});

export default CarouselCardItem;
