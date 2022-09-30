import React,{useRef} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  NewsStackNavigator,
  LiveStackNavigator,
  WeatherStackNavigator,
} from "./StackNavigation";

import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const viewRef = useRef(null);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "News") {
            iconName = focused ? "newspaper-outline" : "newspaper-outline";
          } else if (route.name === "Media") {
            iconName = focused ? "play-circle-outline" : "play-circle-outline";
          } else if (route.name === "Weather") {
            iconName = focused
              ? "thunderstorm-outline"
              : "thunderstorm-outline";
          }
          return (
        
              <Animatable.View
              animation="zoomIn"
                ref={viewRef}
                duration={1000}
                style={styles.container}
              >
                <Ionicons name={iconName} size={18} color={color} />
              </Animatable.View>
       
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        // tabBarShowLabel: false,
        // tabBarStyle: {
        //   height: 60,
        //   position: "absolute",
        //   bottom: 16,
        //   right: 16,
        //   left: 16,
        //   borderRadius: 16,
        // },
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News"
        component={NewsStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Media"
        component={LiveStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})