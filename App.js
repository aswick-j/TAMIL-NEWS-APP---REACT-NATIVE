import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/screens/Home";
import NewsFeed from "./src/screens/NewsFeed";
import LiveNews from "./src/screens/LiveNews";
import Weather from "./src/screens/Weather";
import BottomTabNavigator from "./src/navigation/TabNavigation";


export default function App() {

  return (
    <NavigationContainer>
   <BottomTabNavigator/>
    </NavigationContainer>
  );
}
