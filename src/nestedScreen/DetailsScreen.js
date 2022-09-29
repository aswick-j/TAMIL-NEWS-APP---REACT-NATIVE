import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { Linking } from 'react-native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniIcons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("screen");
const DetailsScreen = ({ navigation, route }) => {
  const news = route.params;
  // console.log("====", news);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.header}>
            <View style={style.headerBtn}>
              <IoniIcons
                name="chevron-back"
                size={20}
                onPress={navigation.goBack}
              />
            </View >
            <View style={style.headerBtn}>
              <Icon name="share" size={20} color={"tomato"} />
            </View>
          </View>
          <View style={{paddingHorizontal: 20}}>
        <Text style={{ fontSize: 20, fontWeight: "bold", }}>{news.title}</Text>
        <Text style={{ fontSize: 10, color: "grey",marginTop:4 }}>{news.date}</Text>
        </View>
        <View style={style.backgroundImageContainer}>
          <ImageBackground
            style={style.backgroundImage}
            source={{ uri: news.image }}
          ></ImageBackground>
        </View>

        <View style={style.detailsContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          ></View>
         <Text style={{ marginTop: 20,fontWeight:"bold", color: "tomato" }}>
           Article Credits : Puthiya Thalaimurai
          </Text>
          <Text style={{ marginTop: 20, color: "black" }}>
            {news.description}
          </Text>
          <View style={style.footer}>
            <View>
              <TouchableOpacity
                style={style.appButtonContainer}
                onPress={() => Linking.openURL(news.link)}
              >
                <Text style={style.appButtonText}>MORE DETAILS</Text>
              </TouchableOpacity>
              {/* <Text
                style={{color: "blue", fontWeight: 'bold', fontSize: 18}}>
                MORE DETAILS
              </Text> */}
              {/* <Text
                style={{fontSize: 12, color: "grey", fontWeight: 'bold'}}>
                DETAILS
              </Text> */}
            </View>
            <View style={style.bookNowBtn}>
              <Text style={{ color: "white" }}>GO</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    height: 250,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: "dark",
    justifyContent: "center",
    alignItems: "center",
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: "light",
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dark",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  appButtonContainer: {
    marginTop: 5,
    elevation: 8,
    backgroundColor: "tomato",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft:"37%"
  },
  appButtonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 10 },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: "grey" },
});

export default DetailsScreen;
