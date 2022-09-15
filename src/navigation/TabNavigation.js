import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator,NewsStackNavigator,LiveStackNavigator, WeatherStackNavigator } from "./StackNavigation";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "ios-home" : "ios-home-outline";
        } else if (route.name === "News") {
          iconName = focused ? "newspaper-outline" : "newspaper-outline";
        } else if (route.name === "Live") {
          iconName = focused
            ? "play-circle-outline"
            : "play-circle-outline";
        } else if (route.name === "Weather") {
          iconName = focused
            ? "thunderstorm-outline"
            : "thunderstorm-outline";
        }
        return <Ionicons name={iconName} size={18} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
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
      name="Live"
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