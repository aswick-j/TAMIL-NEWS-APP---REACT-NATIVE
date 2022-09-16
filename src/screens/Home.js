import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionic from "react-native-vector-icons/Ionicons";
import CarsouleCard from "../components/CarsouleCard";
import FlatList from "../components/FlatList";
import ListNews from "../components/ListNews";
import Stories from "../components/Stories";
import { sliderData } from "../models/data";

const Home = () => {

  var day = new Date();
  var hr = day.getHours();

  let greeting;

  if (hr >= 0 && hr < 12) {
    greeting = "Good Morning!";
  } else if (hr == 12) {
    greeting = "Good Noon!";
  } else if (hr >= 12 && hr <= 17) {
    greeting = "Good Afternoon!";
  } else if (hr >= 17 && hr <= 19) {
    greeting = "Good Evening!";
  } else {
    greeting = "Good Night!";
  }
  return (
    <ScrollView>
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "tomato",
              paddingBottom: 10,
            }}
          >
            {greeting}
          </Text>
        </View>
        <Text style={styles.livetext}>Live</Text>
        <ScrollView>
          <Stories />
        </ScrollView>
      </View>
      <View>
        <Text style={styles.livetext1}>Top Headlines</Text>
        <CarsouleCard />
      </View>
      <Text style={styles.Breakn}>Breaking News</Text>
      <FlatList />
    </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  livetext: {
    paddingLeft: 20,
    color: "black",
    fontWeight: "800",
  },
  livetext1: {
    paddingLeft: 20,
    marginBottom:10,
    color: "black",
    fontWeight: "800",
  },
  Breakn: {
    paddingLeft: 20,
    marginTop: 5,
    color: "black",
    fontWeight: "800",
  },
});
